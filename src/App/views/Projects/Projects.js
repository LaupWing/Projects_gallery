import React, {useState} from 'react';
import SearchBar from '../../../components/SearchBar/SearchBar';
import {connect} from 'react-redux';
import Project from './Project/Project';
import styles from './Projects.module.css';
import Message from '../../../components/Message/Message';

const Projects = ({projects, filters})=>{
    const [message, setMessage] = useState(false);

    const filtered = projects
        .filter(x=>!x.stack.find(y=>filters.includes(y)))
    return(
        <>
            {message && <Message message={message}/>}
            <SearchBar setMessage={setMessage}/>
            <div className={styles.Projects}>
                {filtered.map((project,i)=><Project project={project} key={i}/>)}
            </div>
        </>
    )
}

const mapStateToProps = (state)=>{
    return{
        projects: state.projects,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(Projects)