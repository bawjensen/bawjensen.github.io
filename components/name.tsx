import Link from "next/link";

import styles from "./name.module.css";

export default function Name() {
    return (
        <div className={styles.name}>
            <Link href="/">
                <a className={styles.nameLink}>
                    Bryan Alexander William Jensen
                </a>
            </Link>
        </div>
    );
}
