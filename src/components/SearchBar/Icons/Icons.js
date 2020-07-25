import React from 'react';
import styles from './Icons.module.css';
import Icon from './Icon/Icon';

const Icons = ({icons, extraStyle, title}) => {
    return (
        <div style={extraStyle} className={styles.icons}>
            <p>{title}</p>
            {icons.map((icon, i)=>{
                return <Icon key={i} icon={icon}/>;
            })}
        </div>
    );
}


export default Icons;
