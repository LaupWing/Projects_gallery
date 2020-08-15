import React, {useState} from 'react'
import skill_list from './skill_list'
import Skill from './Skill/Skill'
import {connect} from 'react-redux'
import styles from './Skills.module.css'

const Skills = ({projects}) => {
    const [status, setStatus] = useState(true)
    
    const skills_projects = skill_list
        .map(x=>{
            return projects.filter(y=>y.stack.includes(x.icon))
        })
        .map(y=>y.length)
    const max_projects = Math.max.apply(Math,skills_projects)
    return (
        <>
            <nav className={styles.display_progressbar}>
                <h3>Display progressbar:</h3> 
                <div 
                    className={`${styles.display} ${status && styles.active}`}
                    onClick={()=>setStatus(true)}
                >
                    Status
                </div>
                <div 
                    className={`${styles.display} ${!status && styles.active}`}
                    onClick={()=>setStatus(false)}
                >
                    Made By
                </div>
                <p className={styles.info}>
                    Total Projects: <span>{projects.length}</span>Max Projects per skill: <span>{max_projects}</span>
                </p>
            </nav>
            {skill_list.map((skill, i)=> 
                <Skill 
                    key={i} 
                    skill={skill}
                    projects={projects.filter(x=>x.stack.includes(skill.icon))}
                    max={max_projects}
                    status={status}
                />
            )}
        </>
    )
}
const mapStateToProps = (state)=>{
    return{
        projects: state.projects
    }
}


export default connect(mapStateToProps)(Skills)
