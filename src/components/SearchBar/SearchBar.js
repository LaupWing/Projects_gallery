import React, {useState} from 'react';
import styles from './SearchBar.module.css'
import MadeBy from './MadeBy/MadeBy'
import Status from './Status/Status'
import SortBy from './SortBy/SortBy'
import MoreFilters from './MoreFilters/MoreFilters'

const SearchBar = ()=>{
    const [showMore, setShowMore] = useState(false)
    return(
        <div className={styles.SearchBar}>
            <input type="text" placeholder="Search for a project..."/>
            <MadeBy/>
            <Status/>
            <SortBy/>
            <MoreFilters/>
            <button onClick={()=>setShowMore(!showMore)}>Show more</button>
        </div>
    );
}

export default SearchBar;