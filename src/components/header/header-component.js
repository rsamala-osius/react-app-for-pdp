import React from 'react';
import styles from './header-component.css'
import GspannLog from '../../images/GSPANN_Logo_500x120.png'

const HeaderComponent = () => {
    return(
        <div className ={styles.header} >
            <img src={GspannLog} className={styles.gspannLogo} alt="Gspann logo" /> 
         
        </div>
    )

}
export default HeaderComponent;