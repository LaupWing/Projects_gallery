import React from 'react';
import {connect} from 'react-redux';
import styles from './Icon.module.css';
import * as actionTypes from '../../../../store/actionTypes'
import icons_loader from '../icons_loader'

function checkActive(icon, activeType, item){
    if(activeType === 'filters'){
        return item.find(x=>x===icon)? true : false;
    }
}

const Icon = ({icon, activeType, onToggleFilter, filters})=>{
    const Component = icons_loader[icon];
    const activeOn = checkActive(icon, activeType, filters);
    return (
        <div 
            onClick={()=>onToggleFilter(icon)} 
            className={activeOn ? styles.active: ''}
        >
            <Component/>
        </div>
    );
}

const mapStateToProps = state =>{
    return {
        filters: state.filters
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