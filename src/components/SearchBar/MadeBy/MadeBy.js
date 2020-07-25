import React from 'react';
import Icons from '../Icons/Icons'

const MadeBy = () => {
    const icons = [
        'tutorial', 
        'self',
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
                title={'Made By'}
            />
        </>
    );
}


export default MadeBy;