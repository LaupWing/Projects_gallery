import React from 'react';
import styles from './Message.module.css';

const Message = ({message}) => {
    return (
        <div className={styles.Message}>
            <p>{message}</p>
        </div>
    );
}

export default Message;
