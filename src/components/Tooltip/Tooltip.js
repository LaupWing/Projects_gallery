import React from 'react';
import styles from './Tooltip.module.css'

const Tooltip = ({message}) => {
    return (
        <div className={styles.Tooltip}>
            <h2>{message}</h2>
        </div>
    );
}

export default Tooltip;
