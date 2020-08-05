import React from 'react';
import Icons from '../Icons/Icons';
import icons from './FilterIcons';

const MoreFilters = ({setModifier}) => {
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