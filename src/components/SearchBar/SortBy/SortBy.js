import React from 'react';
import Icons from '../Icons/Icons'

const SortBy = () => {
    const icons = [
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
            />
        </>
    );
}


export default SortBy;