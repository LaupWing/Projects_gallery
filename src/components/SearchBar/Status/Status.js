import React from 'react';
import Icons from '../Icons/Icons'

const Status = () => {
    const icons = [
        'finished', 
        'unfinished',
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
                title={'Status'}
                activeType={'filters'}
            />
        </>
    );
}


export default Status;