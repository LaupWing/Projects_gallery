import React from 'react'
import icons_loader from '../../../../components/Icons/icons_loader'
import styles from './Skill.module.css'

const Skill = ({skill}) => {
    const Icon = icons_loader[skill.icon]
    return (
        <div className={styles.skill}>
            <div className={styles.progress_container}>
                <Icon/>
            </div>
            <button>Show projects</button>
        </div>
    )
}

export default Skill
