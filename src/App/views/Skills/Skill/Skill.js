import React from 'react'
import icons_loader from '../../../../components/Icons/icons_loader'
import styles from './Skill.module.css'

const Skill = ({skill, projects, max}) => {
    const Icon = icons_loader[skill.icon]
    const calcWidth = (status)=>{
        const finished = projects.filter(x=>x.status ===status) 
        return 100 - ((max - finished.length) * (100/max))  
    }
    return (
        <div className={styles.skill}>
            <div className={styles.progress_container}>
                <Icon/>
                <div className={styles.progress}>
                    <div 
                        className={styles.progress_bar_finished}
                        style={{
                            width: `${calcWidth('finished')}%`
                        }}
                    >
                    </div>
                    <div 
                        className={styles.progress_bar_unfinished}
                        style={{
                            width: `${calcWidth('unfinished')}%`
                        }}
                    >
                    </div>
                </div>
            </div>
            <button>Show projects</button>
        </div>
    )
}

export default Skill
