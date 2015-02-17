var CURRENT_ROUTE = window.location.pathname;

// ==================================== Portfolio scripts ============================

function initializePortfolio() {
    $('#project-list li').click(function() {
        var targetId = $(this).attr('id');
        var newId = '#' + targetId + '-info';
        $('#project-info > div').hide();

        var $newDiv = $(newId);

        $newDiv.show().parent('#project-info').height($newDiv.height());
    });
}

// ==================================== Main page scripts ============================

// function scrollToBlog() {
//     $('html, body').animate({
//         scrollTop: $('#blog-container').offset().top
//     }, 250);
// }

// var blog = {};

function initializeMainPage() {
    // $(document).on('click', '.state-transition', function(evt) {
    //     var transitionId = $(this).data('state');

    //     if (transitionId in blog.state.transitions) {
    //         blog.state.transitions[transitionId](evt);
    //     }
    // });

    // var topics = new Firebase("https://personal-blog.firebaseio.com/");

    // topics.on("value", function(data) {
    //     var topicsObj = data.val() ? data.val().topics : {};

    //     var topicLinksTemplate = blogTemplate({ topicsObj: topicsObj });

    //     var topicHtmls = {};
    //     for (var key in topicsObj) {
    //         topicHtmls[key] = topicTemplate({ topic: topicsObj[key] });
    //     }

    //     blog.layers = {
    //         'first': {
    //             transitions: {
    //                 'intro': function(evt) {
    //                     var $newDiv = $($.parseHTML(topicLinksTemplate));

    //                     $newDiv.appendTo('#content');

    //                     scrollToBlog();

    //                     blog.state = blog.layers.second;
    //                 }
    //             }
    //         },
    //         'second': {
    //             transitions: {
    //                 'home': function(evt) {
    //                     $('#blog-container').remove();
    //                     blog.state = blog.layers.first;
    //                 },
    //                 'intro': scrollToBlog,
    //                 'topic': function(evt) {
    //                     var $newDiv = $($.parseHTML(topicHtmls[evt.target.id]));

    //                     var topics = $('#topics-container');

    //                     // Manually set the margin, make it floated, and display block (removes funkiness with animation)
    //                     topics.css('margin-left', topics.css('margin-left'));
    //                     topics.css('float', 'left');
    //                     topics.css('display', 'block');

    //                     topics.animate({
    //                         marginLeft: 40,
    //                         marginRight: 40,
    //                         // fontSize: 30,
    //                         // borderRightColor: 'white',
    //                         // borderRightWidth: 1,
    //                         width: 200
    //                     }, 250, function after() {
    //                         // topics.css('line-height', topics.css('line-height'));
    //                         // topics.css('font-size', '20px');
    //                         $newDiv.appendTo($('#blog-container'));
    //                     });

    //                     blog.state = blog.layers.third;
    //                 }
    //             }
    //         },
    //         'third': {
    //             transitions: {
    //                 'home': function(evt) {
    //                     $('#blog-container').remove();
    //                     blog.state = blog.layers.first;
    //                 },
    //                 'intro': scrollToBlog,
    //                 'topic': function(evt) {
    //                     var $newDiv = $($.parseHTML(topicHtmls[evt.target.id]));

    //                     $('#posts').replaceWith($newDiv);
    //                 },
    //                 'post': function(evt) {
    //                     var $clicked = $(evt.target);

    //                     $clicked.closest('.post').find('.preview, .text').toggle();

    //                     blog.state = blog.layers.fourth;
    //                     blog.state.$showing = $clicked;
    //                 },
    //                 'close': function(evt) {
    //                     $('#posts').remove();
    //                     $('#topics-container').attr('style', '');
    //                     blog.state = blog.layers.second;
    //                 }
    //             }
    //         },
    //         'fourth': {
    //             transitions: {
    //                 'home': function(evt) {
    //                     $('#blog-container').remove();
    //                     blog.state = blog.layers.first;
    //                 },
    //                 'intro': scrollToBlog,
    //                 'topic': function(evt) {
    //                     var $newDiv = $($.parseHTML(topicHtmls[evt.target.id]));

    //                     $('#posts').replaceWith($newDiv);
    //                 },
    //                 'post': function(evt) {
    //                     var $clicked = $(evt.target).closest('.post');

    //                     $clicked.find('.preview, .text').toggle();

    //                     if (blog.state.$showing && ($clicked[0] == blog.state.$showing[0])) {
    //                         blog.state = blog.layers.third;
    //                     }
    //                     else if (blog.state.$showing) {
    //                         blog.state.$showing.find('.preview, .text').toggle();
    //                         blog.state.$showing = $clicked;
    //                     }
    //                     else {
    //                         blog.state.$showing = $clicked;
    //                     }
    //                 },
    //                 'close': function(evt) {
    //                     $('#posts').remove();
    //                     $('#topics-container').attr('style', '');
    //                     blog.state = blog.layers.second;
    //                 }
    //             },
    //             $showing: null
    //         }
    //     };

    //     blog.state = blog.layers.first;
    // });
}

// ==================================== OnLoad scripts ===============================

$(function() {
    if (CURRENT_ROUTE.match('portfolio')) {
        initializePortfolio();
    }
    else if (CURRENT_ROUTE.match('/')) {
        initializeMainPage();
    }
});