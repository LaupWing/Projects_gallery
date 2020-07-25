import React, {useState} from 'react';
import styles from './SearchBar.module.css'
import MadeBy from './MadeBy/MadeBy'
import Status from './Status/Status'
import SortBy from './SortBy/SortBy'
import MoreFilters from './MoreFilters/MoreFilters'
import CSSTransition from 'react-transition-group/CSSTransition'

const SearchBar = ()=>{
    const [showMore, setShowMore] = useState(false)
    return(
        <div className={styles.SearchBar}>
            <input type="text" placeholder="Search for a project..."/>
            <MadeBy/>
            <Status/>
            <SortBy/>
            <CSSTransition
                mountOnEnter
                unmountOnExit
                in={showMore}
                timeout={1000}
                classNames='scale-up'
            >
                <MoreFilters/>
            </CSSTransition>
            <button onClick={()=>setShowMore(!showMore)}>Show more</button>
        </div>
    );
}

export default SearchBar;