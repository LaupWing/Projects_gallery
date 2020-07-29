import React from 'react';
import Icons from '../Icons/Icons';

const SortBy = ({setModifier}) => {
    const icons = [
        {
            message: 'Best project first',
            icon:'favorite',
            section: 'Sort By'
        },
        {
            message: 'Newest first',
            icon:'down',
            section: 'Sort By'
        }, 
        {
            message: 'Oldest first',
            icon:'up',
            section: 'Sort By'
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
                handleClick={setModifier}
            />
        </>
    );
}

export default SortBy;