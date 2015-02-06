var Firebase    = require('firebase'),
    fs          = require('fs'),
    marked      = require('marked'),
    path        = require('path');

var fb = new Firebase("https://personal-blog.firebaseio.com");

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

initialDir = '.';

fs.readdir(initialDir, function(err, subDirectories) {
    if (err) throw err;

    for (var i in subDirectories) {
        var topicSubDir = subDirectories[i];

        fs.stat(topicSubDir, (function(topicSubDir, err, stats) {
            if (err) throw err;

            if (stats.isDirectory()) {
                var newDir = path.join(initialDir, topicSubDir);

                fs.readdir(newDir, function(err, files) {
                    for (var i in files) {
                        var file = files[i];
                        var fileExt = path.extname(file);
                        var fileBase = path.basename(file, fileExt);

                        console.log(path.join(newDir, file));

                        if (fileExt === '.md') {
                            fs.readFile(path.join(newDir, file), 'utf8', function(err, mdFile) {
                                if (err) throw err;

                                var html = marked(mdFile);

                                var topic = fb.child('topics').child(topicSubDir)

                                topic.child('posts').child(fileBase).set({
                                    title: fileBase,
                                    text: html,
                                    preview: html.slice(0, 200)
                                });
                            });
                        }
                        else {
                            console.log('Nope');
                        }
                    }
                });
            }
        }).bind(null, topicSubDir));
    }
});