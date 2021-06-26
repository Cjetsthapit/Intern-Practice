import React from 'react';
import Email from './Email';
import Links from './Links';
import styles from './Footer.module.css';
const Footer=(props)=>{
    return(
    <div className={styles.footer}>
        <div className={styles.leftFooter}>
        <Email/>
        <div className="sub-text">
         By entering your email address, you agree to receive emails from Srijeet.
        </div>
        <div className="sub-text white">
            Currency EUR | English
        </div>
        </div>
        <div className={styles.rightFooter}>
        <Links/>
        <div className="sub-text ">
           &copy; Copyright by Srijeet. All Rights Reserved.
        </div>

        </div>
    </div>)
};
export default Footer ;