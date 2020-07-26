import React, {useState} from 'react';
import styles from './SearchBar.module.css';
import MadeBy from './MadeBy/MadeBy';
import Status from './Status/Status';
import SortBy from './SortBy/SortBy';
import MoreFilters from './MoreFilters/MoreFilters';
import AnimateHeight from 'react-animate-height';

const SearchBar = ()=>{
    const [showMore, setShowMore] = useState(false)
    return(
        <div className={styles.SearchBar}>
            <input type="text" placeholder="Search for a project..."/>
            <MadeBy/>
            <Status/>
            <SortBy/>
            <AnimateHeight
                duration={ 500 }
                height={ showMore ? 'auto' : 0}
                style={{
                        'width': '100%'
                }}
            >
                <MoreFilters/>
            </AnimateHeight>
            <button onClick={()=>setShowMore(!showMore)}>{showMore ? 'Hide Filters':'Show more'}</button>
        </div>
    );
}

export default SearchBar;