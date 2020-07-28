import React, {useState} from 'react';
import styles from './Project.module.css';
import icons_loader from '../../../../components/Icons/icons_loader'; 

const Project = ({project}) => {
    const image = require(`../../../../assets/projects_images/${project.image}`);
    const MadeBy = icons_loader[project.madeBy];
    const Status = icons_loader[project.status];
    const [showMore, setShowMore] = useState(false);

    return (
        <div 
            className={styles.Project} 
            onMouseOver={()=>setShowMore(true)}
            onMouseOut={()=>setShowMore(false)}
        >
            <h2>{project.title}</h2>
            <div className={styles.imageContainer}>
                <img alt={image} src={image}/>
                <div className={[styles.info, showMore ? '' : styles.hidden].join(' ')}>
                    <div className={styles.field}>
                        <h3>Made By</h3>
                        <MadeBy/>
                    </div>
                    <div className={styles.field}>
                        <h3>Status</h3>
                        <Status/>
                    </div>
                </div>
            </div>
            <div className={styles.stack}>
                <h3>Stack</h3>
                {project.stack.map((x,i)=>{
                    const Icon = icons_loader[x]
                    return <Icon key={i}/>
                })}
            </div>
        </div>
    );
}

export default Project;