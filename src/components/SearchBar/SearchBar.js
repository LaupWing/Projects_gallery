import React, {useState} from 'react';
import styles from './SearchBar.module.css';
import MadeBy from './MadeBy/MadeBy';
import Status from './Status/Status';
import SortBy from './SortBy/SortBy';
import MoreFilters from './MoreFilters/MoreFilters';
import AnimateHeight from 'react-animate-height';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actionTypes';

const SearchBar = ({setMessage, onToggleFilter})=>{
    const [showMore, setShowMore] = useState(false)

    const setFilter = (iconObj)=>{
        setMessage(iconObj)
        onToggleFilter(iconObj.icon)
    }
    return(
        <div className={styles.SearchBar}>
            <input type="text" placeholder="Search for a project..."/>
            <MadeBy setFilter={setFilter}/>
            <Status setFilter={setFilter}/>
            <SortBy setFilter={setFilter}/>
            <AnimateHeight
                duration={ 500 }
                height={ showMore ? 'auto' : 0}
                style={{
                        'width': '100%'
                }}
            >
                <MoreFilters setFilter={setFilter}/>
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
        })
    };
}

export default connect(null, mapDispatchToProps)(SearchBar);