import React, {useState} from 'react';
import Tooltip from '../../../../components/Tooltip/Tooltip';
import styles from './Icon.module.css';
import icons_loader from '../../../../components/Icons/icons_loader';

const Icon = ({icon})=>{
    const Component = icons_loader[icon];
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div 
            className={styles.Icon}
            onMouseOver={()=>setShowTooltip(true)}
            onMouseOut={()=>setShowTooltip(false)}
        >
            {/* {showTooltip && <Tooltip
                message={message}
            />} */}
            <Component/>
        </div>
    );
}


export default Icon;