import React from 'react'
import skill_list from './skill_list'
import Skill from './Skill/Skill'
import {connect} from 'react-redux'

const Skills = ({projects}) => {
    const skills_projects = skill_list
        .map(x=>{
            return projects.filter(y=>y.stack.includes(x.icon))
        })
        .map(y=>y.length)
    const max_projects = Math.max.apply(Math,skills_projects)
    
    return (
        <>
            {skill_list.map((skill, i)=> 
                <Skill 
                    key={i} 
                    skill={skill}
                    projects={projects.filter(x=>x.stack.includes(skill.icon))}
                    max={max_projects}
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
