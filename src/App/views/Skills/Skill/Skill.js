import React, {useState} from 'react'
import icons_loader from '../../../../components/Icons/icons_loader'
import styles from './Skill.module.css'
import Tooltip from '../../../../components/Tooltip/Tooltip'
import Detail from '../../../../components/Detail/Detail'
import Project from '../../../../components/Project/Project'

const Skill = ({skill, projects, max, status}) => {
    const Icon = icons_loader[skill.icon]
    const [showTooltip, setShowTooltip] = useState(false)
    const [detail, setDetail] = useState(false)
    const [showProjects, setShowProjects] = useState(false)

    const calcWidth = (val)=>{
        const filtered = projects.filter(x=>status? x.status ===val : x.madeBy === val) 
        return 100 - ((max - filtered.length) * (100/max))  
    }

    const byStatus=()=>{
        const finished = projects.filter(x=>x.status==='finished').length
        const unfinished = projects.filter(x=>x.status==='unfinished').length
        return `Finished projects: ${finished} \n Unfinished projects: ${unfinished}`
    }

    const byMadeBy=()=>{
        const self = projects.filter(x=>x.madeBy==='self').length
        const tutorial = projects.filter(x=>x.madeBy==='tutorial').length
        return `Selfmade projects: ${self} \n Tutorial projects: ${tutorial}`
    }
    
    return (
        <div 
            className={`${styles.skill} ${showProjects && styles.expand}`}
            onMouseOver={()=>!detail && setShowTooltip(true)}
            onMouseOut={()=>!detail &&setShowTooltip(false)}
        >
            {showTooltip && <Tooltip message={status ? byStatus() : byMadeBy()}/>}
            {detail && <Detail detail={detail} setDetail={setDetail}/>}
            <div className={styles.progress_container}>
                <Icon/>
                <div className={styles.progress}>
                    <div 
                        className={styles.progress_bar_finished}
                        style={{
                            width: `${calcWidth(status ? 'finished' : 'self')}%`,
                            background: `${status ? 'var(--pinkish)': 'var(--accent-color)'}`
                        }}
                    >
                    </div>
                    <div 
                        className={styles.progress_bar_unfinished}
                        style={{
                            width: `${calcWidth(status ? 'unfinished' : 'tutorial')}%`,
                            background: `${status ? 'var(--pinkish)': 'var(--accent-color)'}`
                        }}
                    >
                    </div>
                </div>
            </div>
            {(showProjects && projects.length > 0) && <div className={styles.projects}>
                {projects.map((project,i)=><Project 
                    project={project} 
                    key={i}
                    setDetail={setDetail}
                />)}
            </div>}
            {(showProjects && projects.length === 0) &&<h2 className={styles.noProject}>There are no projects linked with this skill yet. This means I did not have time to add the project linked with this skill. All the skills I have listed here have at least one project, selfmade or by tutorial.</h2>}
            <button onClick={()=>setShowProjects(!showProjects)}>
                {showProjects ? 'Hide Projects' :  'Show projects'}
            </button>
        </div>
    )
}

export default Skill
