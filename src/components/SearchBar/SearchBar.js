import React, {useState} from 'react';
import styles from './SearchBar.module.css';
import MadeBy from './MadeBy/MadeBy';
import Status from './Status/Status';
import SortBy from './SortBy/SortBy';
import MoreFilters from './MoreFilters/MoreFilters';
import AnimateHeight from 'react-animate-height';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actionTypes';

const SearchBar = ({setMessage, onToggleFilter, onSortBy})=>{
    const [showMore, setShowMore] = useState(false)

    const setModifier = (iconObj)=>{
        console.log(iconObj)
        setMessage(iconObj)
        if(iconObj.section === 'Sort By'){
            onSortBy(iconObj.icon)
        }else{
            onToggleFilter(iconObj.icon)
        }
    }
    return(
        <div className={styles.SearchBar}>
            <input type="text" placeholder="Search for a project..."/>
            <MadeBy setModifier={setModifier}/>
            <Status setModifier={setModifier}/>
            <SortBy setModifier={setModifier}/>
            <AnimateHeight
                duration={ 500 }
                height={ showMore ? 'auto' : 0}
                style={{
                        'width': '100%'
                }}
            >
                <MoreFilters setModifier={setModifier}/>
            </AnimateHeight>
            <button onClick={()=>setShowMore(!showMore)}>{showMore ? 'Hide Filters':'Show more'}</button>
        </div>
    );
}

const mapDispatchToProps = dispatch =>{
    return {
        onToggleFilter: (item)=> dispatch({
            type: actionTypes.TOGGLE_FILTER,
            item
        }),
        onSortBy: (item)=> dispatch({
            type: actionTypes.SET_SORTBY,
            item
        })
    };
}

export default connect(null, mapDispatchToProps)(SearchBar);