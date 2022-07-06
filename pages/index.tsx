import ExternalLinkIcon from "../components/external-link-icon";

import styles from "./index.module.css";

function ExternalLinkIconStyled() {
    return <ExternalLinkIcon height="20px" width="20px" fill="#ffffff" />;
}

export default function Home() {
    return (
        <div className={styles.baseContainer}>
            <div className={styles.homepageContainer}>
                <div className={styles.name}>
                    Bryan Alexander William Jensen
                </div>

                <ul className={styles.links}>
                    <li className={styles.linkEntry}>
                        <a
                            className={styles.link}
                            href="https://github.com/bawjensen"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                            <ExternalLinkIconStyled />
                        </a>
                    </li>

                    <li className={styles.linkEntry}>
                        <a
                            className={styles.link}
                            href="https://linkedin.com/in/bawjensen"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                            <ExternalLinkIconStyled />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
