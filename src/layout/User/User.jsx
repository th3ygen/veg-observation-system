import { Outlet } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';

import styles from './User.module.scss';

export default function User() {
    return <>
        <div className={styles.page}>
            <div className={styles.pageCont1} >
                <Sidebar />
            </div>
            <div className={styles.pageCont2} >
                <div className={styles.boxTop}>
                    <Topbar />
                </div>
                <div className={styles.boxCont}>
                    
                </div>
            </div> 
            
        </div>
        
    </>
}