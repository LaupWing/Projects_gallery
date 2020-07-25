import React from 'react';
import styles from './Icons.module.css';
import Icon from './Icon/Icon';

const Icons = ({icons}) => {
    return (
        <div className={styles.icons}>
                {icons.map((icon, i)=>{
                    return <Icon key={i} icon={icon}/>;
                })}
        </div>
    );
}


export default Icons;
