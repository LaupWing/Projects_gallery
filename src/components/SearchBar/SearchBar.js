import React from 'react';
import styles from './SearchBar.module.css'
import Icons from './Icons/Icons'

const SearchBar = ()=>{
    return(
        <div className={styles.SearchBar}>
            <input type="text" placeholder="Search for a project..."/>
            <Icons/>
        </div>
    );
}

export default SearchBar;