import React, {useState} from 'react';
import SearchBar from '../../../components/SearchBar/SearchBar';
import {connect} from 'react-redux';
import Project from './Project/Project';
import styles from './Projects.module.css';
import Message from '../../../components/Message/Message';
import moment from 'moment';

const Projects = ({projects, filters, sortBy})=>{
    const [message, setMessage] = useState(false);

    const filtered = projects
        .filter(x=>!x.stack.find(y=>filters.includes(y)))
        .filter(x=>!filters.includes(x.status)&&!filters.includes(x.madeBy))
        .sort((a,b)=>{
            const timestampA = moment(a.createdAt, "D MMMM YYYY").format('X')
            const timestampB = moment(b.createdAt, "D MMMM YYYY").format('X')
            if(sortBy === 'favorite'){
                return a.rank < b.rank ? -1 : b.rank < a.rank ? 1 : 0 
            }else if(sortBy === 'up'){
                return timestampA < timestampB ? -1 : timestampB < timestampA ? 1 : 0
            }else{
                return timestampA > timestampB ? -1 : timestampB > timestampA ? 1 : 0
            }
        })
    
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
        filters: state.filters,
        sortBy: state.sortBy,
    }
}

export default connect(mapStateToProps)(Projects)