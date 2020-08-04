import React, {useState} from 'react';
import styles from './Project.module.css';
import icons_loader from '../../../../components/Icons/icons_loader'; 
import Eye from '../../../../components/Icons/Eye/Eye';
import Github from '../../../../components/Icons/Github/Github';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Project = ({project, setDetail}) => {
    const image = require(`../../../../assets/projects_images/${project.image}`);
    const MadeBy = icons_loader[project.madeBy];
    const Status = icons_loader[project.status];
    const [showMore, setShowMore] = useState(false);
    const Link = icons_loader['link'];

    return (
        <div className={styles.Project}>
            <h2>{project.title}</h2>
            <div 
                className={styles.imageContainer}
                onMouseOver={()=>setShowMore(true)}
                onMouseOut={()=>setShowMore(false)}
            >
                <LazyLoadImage alt={image} src={image}/>
                <div className={[styles.info, showMore ? '' : styles.hidden].join(' ')}>
                    <div className={styles.field}>
                        <h3>Made By</h3>
                        <MadeBy/>
                    </div>
                    <div className={styles.field}>
                        <h3>Status</h3>
                        <Status/>
                    </div>
                    <a 
                        href={project.url} 
                        className={`${styles.link} ${project.url !== '' ? '': styles.disabled}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3>Click here for live version</h3>
                        <Eye/>
                    </a>
                    <a 
                        href={project.githubUrl} 
                        className={styles.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <h3>Click here for github link</h3>
                        <Github/>
                    </a>
                </div>
            </div>
            <div className={styles.stack}>
                <h3>Stack</h3>
                {project.stack.map((x,i)=>{
                    const Icon = icons_loader[x]
                    return <Icon key={i}/>
                })}
            </div>
            <h3 
                onClick={()=>setDetail(project)} 
                className={styles.seeMore}
            >
                Click here to see more <Link/>
            </h3>
        </div>
    );
}

export default Project;