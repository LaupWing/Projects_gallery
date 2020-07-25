import React from 'react';
import Icons from '../Icons/Icons'

const MadeBy = () => {
    const icons = [
        'tutorial', 
        'self',
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
                activeType={'filters'}
            />
        </>
    );
}


export default MadeBy;