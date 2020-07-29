import React from 'react';
import styles from './Message.module.css';

const Message = ({message, removeMessage}) => {
    setTimeout(()=>{
        removeMessage(message)
    },3000)
    return (
        <div className={styles.Message}>
            <p>{message.section}: {message.message} <span>X</span></p>
        </div>
    );
}

export default Message;