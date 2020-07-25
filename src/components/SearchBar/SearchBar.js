import React from 'react';
import styles from './SearchBar.module.css'
import MadeBy from './MadeBy/MadeBy'

const SearchBar = ()=>{
    return(
        <div className={styles.SearchBar}>
            <input type="text" placeholder="Search for a project..."/>
            <MadeBy/>
        </div>
    );
}

export default SearchBar;