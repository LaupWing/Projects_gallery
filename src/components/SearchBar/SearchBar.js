import React from 'react';
import styles from './SearchBar.module.css'

const SearchBar = ()=>{
    return(
        <div className={styles.SearchBar}>
            <input type="text" placeholder="Search for a project..."/>
        </div>
    );
}

export default SearchBar;