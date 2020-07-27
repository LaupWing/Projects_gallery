import React from 'react';
import styles from './Project.module.css';

const Project = ({project}) => {
    const image = require(`../../../../assets/projects_images/${project.image}`)
    return (
        <div className={styles.Project}>
            {project.title}
            <img src={image}/>
        </div>
    );
}

export default Project;