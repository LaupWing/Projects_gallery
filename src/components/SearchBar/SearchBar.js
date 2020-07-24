import React, {Suspense} from 'react';
import styles from './SearchBar.module.css'

const SearchBar = ()=>{
    const icons = [
        'Django', 
        'Electron', 
        'Firebase', 
        'Javascript', 
        'Laravel', 
        'Mongodb'
    ]
    
    return(
        <div className={styles.SearchBar}>
            <input type="text" placeholder="Search for a project..."/>
            <div></div>
            <Suspense fallback={<div>Loading...</div>}>
                {icons.map((icon, i)=>{
                    const Component = React.lazy(() =>
                        import(`../Icons/${icon}/${icon}`)
                    );
                    return <Component key={i}/>;
                })}
            </Suspense>
        </div>
    );
}

export default SearchBar;