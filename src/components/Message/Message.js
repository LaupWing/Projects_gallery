import React from 'react';
import styles from './Message.module.css';

const Message = ({iconObj}) => {
    console.log(iconObj)
    return (
        <div className={styles.Message}>
            {/* <p>{iconObj.message}</p> */}
        </div>
    );
}

export default Message;