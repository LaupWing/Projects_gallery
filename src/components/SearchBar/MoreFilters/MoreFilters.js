import React from 'react';
import Icons from '../Icons/Icons';
import {connect} from 'react-redux';
import * as actionTypes from '../../../store/actionTypes';

const MoreFilters = ({onToggleFilter}) => {
    const icons = [
        {
            message: 'Django projects',
            icon:'django',
            section: 'Filters'
        }, 
        {
            message: 'Laravel projects',
            icon:'laravel',
            section: 'Filters'
        },
        {
            message: 'Electron projects',
            icon:'electron',
            section: 'Filters'
        },
        {
            message: 'Firebase database projects',
            icon:'firebase',
            section: 'Filters'
        },
        {
            message: 'Mongodb database projects',
            icon:'mongodb',
            section: 'Filters'
        },
        {
            message: 'Node projects',
            icon:'node',
            section: 'Filters'
        },
        {
            message: 'Vanille Javascript projects',
            icon:'javascript',
            section: 'Filters'
        },
        {
            message: 'Php projects',
            icon:'php'
        },
        {
            message: 'Python projects',
            icon:'python',
            section: 'Filters'
        },
        {
            message: 'React projects',
            icon:'react',
            section: 'Filters'
        },
        {
            message: 'Vue projects',
            icon:'vue',
            section: 'Filters'
        },
        {
            message: 'CSS focused projects',
            icon:'css',
            section: 'Filters'
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