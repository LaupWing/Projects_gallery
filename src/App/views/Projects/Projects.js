import React from 'react';
import SearchBar from '../../../components/SearchBar/SearchBar';
import {connect} from 'react-redux';
import Project from './Project/Project';
import styles from './Projects.module.css';

const Projects = ({projects, filters})=>{
    const filtered = projects
        .filter(x=>{
            const exists = x.stack.find(y=>filters.includes(y))
            if(!exists){
                return x
            }
        })
    return(
        <>
            <SearchBar/>
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