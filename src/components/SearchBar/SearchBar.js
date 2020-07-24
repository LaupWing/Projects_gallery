import React from 'react';
import styles from './SearchBar.module.css'

const SearchBar = ()=>{
    const icons = ['Django', 'Electron', 'Firebase', 'Javascript', 'Laravel', 'Mongodb'];
    return(
        <div className={styles.SearchBar}>
            <input type="text" placeholder="Search for a project..."/>
            {icons.map(icon=>(
                 React.lazy(() => import(`../Icons/${icon}`))
            ))}
        </div>
    );
}

export default SearchBar;