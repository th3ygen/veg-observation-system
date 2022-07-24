import Topbar from "../../components/Topbar";

import styles from './Dashboard.module.scss';

function Dashboard() {
    return (
        <div className={styles.page}>
            <div className={styles.pageCont2} >
                <div className={styles.title}>
                    <Topbar />
                </div>
                <div className={styles.contMax}>

                </div>
                <div className={styles.contDup}>

                </div>
                <div className={styles.contMax}>

                </div>
            </div>
            <div className={styles.pageCont3} >

            </div>
        </div>
    )
}

export default Dashboard;