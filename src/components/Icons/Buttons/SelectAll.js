import React from 'react';
import styles from './Button.module.css';

const Button = () => {
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.Button}>
                Select All
            </button>
        </div>
    );
}

export default Button;
