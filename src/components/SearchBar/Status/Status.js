import React from 'react';
import Icons from '../Icons/Icons';
import {connect} from 'react-redux';
import * as actionTypes from '../../../store/actionTypes';

const Status = ({onToggleFilter}) => {
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
                nonActiveType={'filters'}
                handleClick={onToggleFilter}
            />
        </>
    );
}

const mapDispatchToProps = dispatch =>{
    return {
        onToggleFilter: (item)=> dispatch({
            type: actionTypes.TOGGLE_FILTER,
            item
        })
    };
}

export default connect(null, mapDispatchToProps)(Status);