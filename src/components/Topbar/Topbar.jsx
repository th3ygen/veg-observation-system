
import styles from "./Topbar.module.scss"
import * as ReactIcons from "react-icons/fa"

export default function Topbar() {

    const Icon = ( { name } ) => {
        const TagName = ReactIcons[name];
        return !!TagName ? <TagName size={18} /> : <p>{name}</p>;
    };         

    return <>
        <div className={styles.topbar}>
            <div className={styles.topleft}>
                <div className={styles.topIcon}>

                </div>
                <div className={styles.topName}>
                
                </div>
            </div>
            <div className={styles.topright}>
                <div className={styles.topIcon}>

                </div>
                <div className={styles.topName}>
                
                </div>
            </div>
        </div>
    </>
}