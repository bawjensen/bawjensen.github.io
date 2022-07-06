import Link from "next/link";

import PageBase from "../components/page-base";
import ExternalLinkIcon from "../components/external-link-icon";
import Name from "../components/name";

import styles from "./index.module.css";

function ExternalLinkIconStyled() {
    return <ExternalLinkIcon height="20px" width="20px" fill="#ffffff" />;
}

export default function Home() {
    return (
        <PageBase>
            <div className={styles.homepageContainer}>
                <Name />

                <ul className={styles.links}>
                    <li className={styles.linkEntry}>
                        <Link href="/about">
                            <a className={styles.link}>About</a>
                        </Link>
                    </li>

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
        </PageBase>
    );
}
