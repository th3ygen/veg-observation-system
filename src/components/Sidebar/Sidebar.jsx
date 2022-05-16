import styles from "./Sidebar.module.scss"


export default function Sidebar() {
    return <>
        <div className={styles.sidebar}>
            <div className={styles.logoCard}>
                <div className={styles.logo}>

                </div>
                <div className={styles.logoName}>
                    JustGood
                </div>
            </div>
            <div className={styles.navlist}>
                <div className={`${styles.sideContent} ${styles.active}`}>
                    <div className={styles.sideIcon}>

                    </div>
                    <div className={styles.sideName}>
                        Plant report
                    </div>
                </div>
                <div className={styles.sideContent}>
                    <div className={styles.sideIcon}>

                    </div>
                    <div className={styles.sideName}>
                        Growth Observation
                    </div>
                </div>
                <div className={styles.sideContent}>
                    <div className={styles.sideIcon}>

                    </div>
                    <div className={styles.sideName}>
                        Crops Estimation
                    </div>
                </div>
            </div>
        </div>
    </>
}