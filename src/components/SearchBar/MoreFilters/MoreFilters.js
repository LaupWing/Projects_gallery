import React from 'react';
import Icons from '../Icons/Icons';
import {connect} from 'react-redux';
import * as actionTypes from '../../../store/actionTypes';

const MoreFilters = ({onToggleFilter}) => {
    const icons = [
        'django', 
        'laravel',
        'electron',
        'firebase',
        'mongodb',
        'node',
        'javascript',
        'php',
        'python',
        'react',
        'vue'
    ];
    const style = {
        'borderTop': 'solid var(--highlight-color) 1px',
        width: '100%'
    }

    return (
        <>
            <Icons
                icons={icons}
                title={'More Filters'}
                nonActiveType={'filters'}
                handleClick={onToggleFilter}
                extraStyle={style}
            />
        </>
    );
}

const mapDispatchToProps = dispatch =>{
    return {
        onToggleFilter: (item)=> dispatch({
            type: actionTypes.TOGGLE_FILTER,
            item
        })
    };
}

export default connect(null, mapDispatchToProps)(MoreFilters);