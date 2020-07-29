import React from 'react';
import Icons from '../Icons/Icons';
import {connect} from 'react-redux';
import * as actionTypes from '../../../store/actionTypes'

const MadeBy = ({onToggleFilter, setMessage}) => {
    const icons = [
        {
            message: 'Made by following a tutorial',
            icon:'tutorial'
        }, 
        {
            message: 'Made by myself',
            icon:'self'
        },
    ];
    const style = {
        'borderTop': 'solid var(--highlight-color) 1px',
        'borderRight': 'solid var(--highlight-color) 1px'
    }
    const setFilter = (item)=>{
        setMessage({
            section: 'Made By',
            item
        })
        onToggleFilter(item)
    }

    return (
        <>
            <Icons 
                extraStyle={style} 
                icons={icons}
                title={'Made By'}
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


export default connect(null, mapDispatchToProps)(MadeBy);