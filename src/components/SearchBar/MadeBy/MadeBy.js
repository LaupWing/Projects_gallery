import React from 'react';
import styles from './Icons.module.css';
import Icon from './Icon/Icon';

const MadeBy = () => {
    const icons = [
        'django', 
        'electron', 
        'firebase', 
        'javascript', 
        'laravel', 
        'mongodb'
    ];

    return (
        <div className={styles.icons}>
                {icons.map((icon, i)=>{
                    return <Icon key={i} icon={icon}/>;
                })}
        </div>
    );
}


export default MadeBy;