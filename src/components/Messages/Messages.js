import React from 'react'
import Message from './Message/Message'
import styles from './Messages.module.css'

const Messages = ({messages, removeMessage}) => {
    
    return (
        <div className={styles.Messages}>
            {messages.map(x=><Message removeMessage={removeMessage} message={x}/>)}
        </div>
    )
}

export default Messages
