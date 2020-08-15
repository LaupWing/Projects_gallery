import React, {useState} from 'react';
import SearchBar from '../../../components/SearchBar/SearchBar';
import {connect} from 'react-redux';
import Project from '../../../components/Project/Project';
import styles from './Projects.module.css';
import Messages from '../../../components/Messages/Messages';
import moment from 'moment';
import Detail from '../../../components/Detail/Detail';

const Projects = ({projects, filters, sortBy, searchTerm})=>{
    const [messages, setMessages] = useState([]);
    const [detail, setDetail] = useState(false);

    const filtered = projects
        .filter(x=>!x.stack.every(y=>filters.includes(y)))
        .filter(x=>!filters.includes(x.status)&&!filters.includes(x.madeBy))
        .filter(x=>{
            return x.title.toLowerCase().includes(searchTerm.toLowerCase())
        })
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
    const addMessage = (iconObj)=>{
        const addedMessage = [...messages, iconObj];
        setMessages(addedMessage);
    }

    return(
        <>
            {messages.length>0 && <Messages 
                messages={messages} 
                removeMessages={()=>setMessages([])}
            />}
            {detail && <Detail detail={detail} setDetail={setDetail}/>}
            <SearchBar setMessage={addMessage}/>
            <div className={styles.Projects}>
                {filtered.map((project,i)=><Project 
                    project={project} 
                    key={i}
                    setDetail={setDetail}
                />)}
            </div>
        </>
    )
}

const mapStateToProps = (state)=>{
    return{
        projects: state.projects,
        filters: state.filters,
        sortBy: state.sortBy,
        searchTerm: state.searchTerm
    }
}

export default connect(mapStateToProps)(Projects)