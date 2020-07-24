import React from 'react';
import styles from './App.module.css'
import SearchBar from '../components/SearchBar/SearchBar'
import Nav from '../components/Nav/Nav'

function App() {
    return (
        <div className={styles.App}>
            <Nav/>
            <SearchBar/>
        </div>
    );
}

export default App;
