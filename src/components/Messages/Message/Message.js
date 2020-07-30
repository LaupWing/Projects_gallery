import React, {useState, useEffect} from 'react';
import styles from './Message.module.css';

const Message = ({message, container, removeMessages}) => {
    const [finished, setFinished] = useState(false)
    useEffect(() => {
        setTimeout(()=>{
            if(finished){
                return
            }
            setFinished(true)
            const finishedCheck = Array
                .from(container
                    .current
                    .children
                )
                .map(x=>x.className)
                .every(x=>x.includes('finished'))
            if(finishedCheck){
                setTimeout(()=>{
                    removeMessages()
                },500)
            }
        },3000)
    })
    return (
        <div 
            className={[
                styles.Message, 
                finished ? styles.finished : '']
                .join(' ')
            }>
            {console.log('rendering message')}
            <p>{message.section}: {message.message} <span>X</span></p>
        </div>
    );
}

export default React.memo(Message);