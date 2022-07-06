import Link from "next/link";

import styles from "./page-base.module.css";

export default function PageBase({ children }: { children: React.ReactNode }) {
    return <div className={styles.pageBaseContainer}>{children}</div>;
}
