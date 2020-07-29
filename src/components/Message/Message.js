import React from 'react';
import styles from './Message.module.css';

const Message = ({message}) => {
    console.log(message)
    return (
        <div className={styles.Message}>
            <p>{message.section}: {message.message}</p>
        </div>
    );
}

export default Message;