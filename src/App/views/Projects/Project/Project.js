import React from 'react';
import styles from './Project.module.css';
import icons_loader from '../../../../components/Icons/icons_loader'; 

const Project = ({project}) => {
    const image = require(`../../../../assets/projects_images/${project.image}`);
    // const MadeBy = icons_loader[project.madeBy];
    // const Status = icons_loader[project.status];

    return (
        <div className={styles.Project}>
            <h2>{project.title}</h2>
            <img alt={image} src={image}/>
            <div className={styles.stack}>
                <h3>Stack</h3>
                {project.stack.map(x=>{
                    const Icon = icons_loader[x]
                    return <Icon/>
                })}
                {/* <div className={styles.field}>
                    <h3>Made By</h3>
                    <MadeBy/>
                </div>
                <div className={styles.field}>
                    <h3>Status</h3>
                    <Status/>
                </div> */}
            </div>
        </div>
    );
}

export default Project;