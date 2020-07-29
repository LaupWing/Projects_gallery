import React from 'react';
import Icons from '../Icons/Icons';

const Status = ({setModifier}) => {
    const icons = [
        {
            message: 'Finished projects',
            icon:'finished',
            section: 'Status'
        }, 
        {
            message: 'Unfinished projects',
            icon:'unfinished',
            section: 'Status'
        },
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
                nonActiveType={'filters'}
                handleClick={setModifier}
            />
        </>
    );
}


export default Status;