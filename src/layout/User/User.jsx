import { Outlet } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';

import styles from './User.module.scss';

export default function User() {
    return <>
        <div className={styles.sidebar} >
            <Sidebar />
        </div>
        {/* <div className={styles.topbar} >
            <Topbar />
        </div> */}
        <div className={styles.content} >
            <Outlet />
        </div>
    </>
}