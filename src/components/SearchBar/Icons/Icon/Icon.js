import React from 'react';
import {connect} from 'react-redux';
import styles from './Icon.module.css';
import * as actionTypes from '../../../../store/actionTypes'
import icons_loader from '../icons_loader'

const Icon = ({icon, filters, onToggleFilter})=>{
    const Component = icons_loader[icon];
    const filterOn = filters.find(x=>x===icon)? true : false;
    return (
        <div 
            onClick={()=>onToggleFilter(icon)} 
            className={filterOn ? styles.filterOn: ''}
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