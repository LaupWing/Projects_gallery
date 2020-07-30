import React, {useRef} from 'react'
import Message from './Message/Message'
import styles from './Messages.module.css'

const Messages = ({messages, removeMessages}) => {
    const container = useRef(null)
    return (
        <div ref={container} className={styles.Messages}>
            {console.log('rendering messages')}
            {messages.map((x,i)=>
                <Message 
                    container={container} 
                    removeMessages={removeMessages} 
                    message={x}
                    key={i}
                />
            )}
        </div>
    )
}

export default Messages
