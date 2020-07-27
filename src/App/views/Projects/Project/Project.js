import React from 'react';
import styles from './Project.module.css';

const Project = ({project}) => {
    const image = require(`../../../../assets/projects_images/${project.image}`)
    return (
        <div className={styles.Project}>
            <h2>{project.title}</h2>
            <img alt={image} src={image}/>
            <div className={styles.info}>
                <div className={styles.field}>
                    <h3>Made By</h3>
                </div>
                <div className={styles.field}>
                    <h3>Status</h3>
                </div>
            </div>
        </div>
    );
}

export default Project;