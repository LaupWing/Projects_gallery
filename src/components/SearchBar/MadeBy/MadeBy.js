import React from 'react';
import Icons from '../Icons/Icons';

const MadeBy = ({setFilter}) => {
    const icons = [
        {
            message: 'Made by following a tutorial',
            icon:'tutorial',
            section: 'Made By'
        }, 
        {
            message: 'Made by myself',
            icon:'self',
            section: 'Made By'
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
                title={'Made By'}
                nonActiveType={'filters'}
                handleClick={setFilter}
            />
        </>
    );
}


export default MadeBy;