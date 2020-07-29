import React from 'react';
import styles from './Message.module.css';

const Message = ({message}) => {
    return (
        <div className={styles.Message}>
            <p>{message.section}: {message.message} <span>X</span></p>
        </div>
    );
}

export default Message;