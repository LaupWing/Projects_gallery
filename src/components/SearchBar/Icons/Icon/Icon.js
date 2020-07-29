import React, {useState} from 'react';
import {connect} from 'react-redux';
import Tooltip from './Tooltip/Tooltip';
import styles from './Icon.module.css';
import icons_loader from '../../../../components/Icons/icons_loader';

function checkActive(icon, nonActiveType, filters, sortBy){
    if(nonActiveType === 'filters'){
        return filters.find(x=>x===icon)? true : false;
    }
    else if(nonActiveType === 'sortBy'){
        return sortBy !== icon;
    }
}

const Icon = ({iconObj, nonActiveType, handleClick, filters, sortBy})=>{
    const {icon, message} = iconObj;
    const Component = icons_loader[icon];
    const activeOut = checkActive(icon, nonActiveType, filters, sortBy);
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div 
            onClick={()=>handleClick(iconObj)} 
            className={[styles.Icon, activeOut ? styles.nonActive: ''].join(' ')}
            onMouseOver={()=>setShowTooltip(true)}
            onMouseOut={()=>setShowTooltip(false)}
        >
            {showTooltip && <Tooltip
                message={message}
            />}
            <Component/>
        </div>
    );
}

const mapStateToProps = state =>{
    return {
        filters: state.filters,
        sortBy: state.sortBy
    };
}

export default React.memo(connect(mapStateToProps)(Icon));