import React from 'react';
import Icons from '../Icons/Icons';
import {connect} from 'react-redux';
import * as actionTypes from '../../../store/actionTypes';

const MoreFilters = ({onToggleFilter}) => {
    const icons = [
        {
            message: 'Django projects',
            icon:'django'
        }, 
        {
            message: 'Laravel projects',
            icon:'laravel'
        },
        {
            message: 'Electron projects',
            icon:'electron'
        },
        {
            message: 'Firebase database projects',
            icon:'firebase'
        },
        {
            message: 'Mongodb database projects',
            icon:'mongodb'
        },
        {
            message: 'Node projects',
            icon:'node'
        },
        {
            message: 'Vanille Javascript projects',
            icon:'javascript'
        },
        {
            message: 'Php projects',
            icon:'php'
        },
        {
            message: 'Python projects',
            icon:'python'
        },
        {
            message: 'React projects',
            icon:'react'
        },
        {
            message: 'Vue projects',
            icon:'vue'
        },
        {
            message: 'CSS focused projects',
            icon:'css'
        }
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