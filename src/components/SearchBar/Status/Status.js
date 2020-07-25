import React from 'react';
import Icons from '../Icons/Icons'

const Status = () => {
    const icons = [
        'finished', 
        'unfinished',
    ];
    const style = {
        'border-top': 'solid var(--highlight-color) 1px',
        'border-right': 'solid var(--highlight-color) 1px'
    }

    return (
        <>
            <Icons 
                extraStyle={style} 
                icons={icons}
                title={'Status'}
            />
        </>
    );
}


export default Status;