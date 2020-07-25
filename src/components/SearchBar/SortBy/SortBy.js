import React from 'react';
import Icons from '../Icons/Icons'

const SortBy = () => {
    const icons = [
        'favorite',
        'down', 
        'up',
    ];
    const style = {
        'borderTop': 'solid var(--highlight-color) 1px',
        'borderRight': 'solid var(--highlight-color) 1px'
    }

    return (
        <>
            <Icons 
                extraStyle={style} 
                icons={icons}
                title={'Sort By'}
                activeType={'filters'}
            />
        </>
    );
}


export default SortBy;