import React from 'react';
import styles from './App.module.css'
import {Route, Switch} from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import Projects from './views/Projects/Projects'
import Home from './views/Home/Home'

function App() {
    return (
        <div className={styles.App}>
            <Nav/>
            <main>
                <Switch>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </main>
        </div>
    );
}

export default App;
