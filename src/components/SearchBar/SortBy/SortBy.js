import React from 'react';
import Icons from '../Icons/Icons';
import {connect} from 'react-redux';
import * as actionTypes from '../../../store/actionTypes'

const SortBy = ({onSortBy}) => {
    const icons = [
        {
            message: 'Best project first',
            icon:'favorite'
        },
        {
            message: 'Newest first',
            icon:'down'
        }, 
        {
            message: 'Oldest first',
            icon:'up'
        },
    ];
    const style = {
        'borderTop': 'solid var(--highlight-color) 1px',
        'borderRight': 'solid var(--highlight-color) 1px'
    };

    return (
        <>
            <Icons 
                extraStyle={style} 
                icons={icons}
                title={'Sort By'}
                nonActiveType={'sortBy'}
                handleClick={onSortBy}
            />
        </>
    );
}

const mapDispatchToProps = dispatch =>{
    return {
        onSortBy: (item)=> dispatch({
            type: actionTypes.SET_SORTBY,
            item
        })
    };
}


export default connect(null, mapDispatchToProps)(SortBy);