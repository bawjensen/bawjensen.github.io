import Link from "next/link";

import PageBase from "../components/page-base";
import Name from "../components/name";
import BackIcon from "../components/back-icon";

import styles from "./about.module.css";

export default function About() {
    return (
        <PageBase>
            <div className={styles.nameContainer}>
                <Name />
            </div>

            <Link href="/">
                <a className={styles.backLink}>
                    <BackIcon height="24" width="24" fill="#ffffff" />
                    Back
                </a>
            </Link>

            <div className={styles.textContainer}>
                <p className={styles.textSection}>
                    I&apos;m a software engineer, living and working in the San
                    Francisco Bay Area.
                </p>

                <p className={styles.textSection}>
                    My work experience is primarily centered around UI work,
                    including Frontend (i.e. web) as well as iOS. I have also
                    spent a good chunk of my career working in Developer
                    Experience, improving the tooling used by my coworkers.
                </p>
            </div>
        </PageBase>
    );
}
