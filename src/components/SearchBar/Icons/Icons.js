import React from 'react';
import styles from './Icons.module.css';
import Icon from './Icon/Icon';

const Icons = ({icons, extraStyle, title, nonActiveType, handleClick}) => {
    return (
        <div style={extraStyle} className={styles.icons}>
            <p>{title}</p>
            {icons.map((icon, i)=>{
                return <Icon 
                    nonActiveType={nonActiveType} 
                    key={i} 
                    iconObj={icon}
                    handleClick={handleClick}
                />;
            })}
        </div>
    );
}


export default Icons;
