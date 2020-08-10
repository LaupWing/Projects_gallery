import React from 'react'
import skill_list from './skill_list'
import Skill from './Skill/Skill'

const Skills = () => {
    return (
        <>
            {skill_list.map(skill=> <Skill skill={skill}/>)}
        </>
    )
}

export default Skills
