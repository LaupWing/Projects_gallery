import React from 'react';
import {connect} from 'react-redux';
import styles from './Icon.module.css';
import * as actionTypes from '../../../../store/actionTypes'
import icons_loader from '../icons_loader'

function checkActive(icon, nonActiveType, filters, sortBy){
    if(nonActiveType === 'filters'){
        return filters.find(x=>x===icon)? true : false;
    }
    else if(nonActiveType === 'sortBy'){
        return sortBy !== icon;
    }
}

const Icon = ({icon, nonActiveType, onToggleFilter, filters, sortBy})=>{
    const Component = icons_loader[icon];
    const activeOut = checkActive(icon, nonActiveType, filters, sortBy);
    return (
        <div 
            onClick={()=>onToggleFilter(icon)} 
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
const mapDispatchToProps = dispatch =>{
    return {
        onToggleFilter: (item)=> dispatch({
            type: actionTypes.TOGGLE_FILTER,
            item
        })
    };
}

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Icon));