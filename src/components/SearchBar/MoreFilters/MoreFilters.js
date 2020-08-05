import React from 'react';
import Icons from '../Icons/Icons';

const MoreFilters = ({setModifier}) => {
    const icons = [
        {
            message: 'Select All',
            icon: 'selectAll',
            section: 'Filters'
        },
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
            icon:'php',
            section: 'Filters'
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
                handleClick={setModifier}
                extraStyle={style}
            />
        </>
    );
};

export default MoreFilters;