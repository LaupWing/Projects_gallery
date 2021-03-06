import React, {useState} from 'react';
import styles from './Project.module.css';
import icons_loader from '../Icons/icons_loader'; 
import Eye from '../Icons/Eye/Eye';
import Github from '../Icons/Github/Github';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Project = ({project, setDetail}) => {
    const image = require(`../../assets/projects_images/${project.image}`);
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
                <LazyLoadImage
                    effect="blur" 
                    alt={image} 
                    src={image}
                />
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
                <div className={styles.skills}>
                    {project.stack.map((x,i)=>{
                        const Icon = icons_loader[x]
                        return <Icon key={i}/>
                    })}
                </div>
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