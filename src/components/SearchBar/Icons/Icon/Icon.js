import React from 'react';
import {connect} from 'react-redux';
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

const Icon = ({icon, nonActiveType, handleClick, filters, sortBy})=>{
    const Component = icons_loader[icon];
    const activeOut = checkActive(icon, nonActiveType, filters, sortBy);
    return (
        <div 
            onClick={()=>handleClick(icon)} 
            className={activeOut ? styles.nonActive: ''}
        >
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