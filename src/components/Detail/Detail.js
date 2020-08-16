import React, {useEffect} from 'react';
import styles from './Detail.module.css';
import icon_loader from '../../components/Icons/icons_loader';
import moment from 'moment';
import {withRouter} from 'react-router-dom'

const Detail = ({detail, setDetail, location}) => {
    const MadeBy = icon_loader[detail.madeBy];
    const Status = icon_loader[detail.status];
    const Github = icon_loader.github;
    const Link = icon_loader.link;
    const image = require(`../../assets/projects_images/${detail.image}`);
    const cur_path = location.pathname.replace('/', '');
    useEffect(()=>{
        document.body.style.overflow = 'hidden';

        return () =>{
            document.body.removeAttribute('style');
        }
    },[])
    return (
        <div className={styles.Detail}>
            {detail.url !== '' ? <iframe src={detail.url} title="W3Schools Free Online Web Tutorials"></iframe> : <div className={styles.imageContainer}><img alt={detail.image} src={image}/></div>}
            <div className={styles.meta}>
                <div 
                    className={`${styles.field} ${styles.goBack}`}
                    onClick={()=>setDetail(false)}
                >
                    <h2>Go back to {cur_path}</h2>
                </div>
                <div 
                    className={styles.field}
                >
                    <h2>Name</h2>
                    <p>{detail.title}</p>
                </div>
                <div 
                    className={styles.field}
                >
                    <h2>Rank</h2>
                    <p>{detail.rank}</p>
                </div>
                <div 
                    className={styles.field}
                >
                    <h2>Created At</h2>
                    <p>{moment(detail.createdAt, "D MMMM YYYY").fromNow()}</p>
                </div>
                <div 
                    className={styles.field}
                    style={{
                        alignItems: 'flex-start',
                        padding: '10px 20px',
                        paddingBottom: '0px'
                    }}
                >
                    <div className={styles.sub_field}>
                        <h2>Status</h2>
                        <p><Status/></p>
                    </div>
                    <div className={styles.sub_field}>
                        <h2>Made By</h2>
                        <p><MadeBy/></p>
                    </div>
                </div>
                <div 
                    className={styles.field}
                    style={{
                        alignItems: 'center',
                        padding: '10px 20px',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <h2 style={{
                        width: '100%'
                    }}>Stack</h2>
                    <p style={{
                        display: 'flex',
                        flexWrap: 'wrap'
                    }}>{detail.stack.map((x,i)=>{
                        const Cmp = icon_loader[x];
                        return <Cmp key={i}/>;
                    })}</p>
                </div>
                <div 
                    className={`${styles.field} ${styles.link}`}
                >
                    <a href={detail.githubUrl} target="_blank" rel="noopener noreferrer">
                        Click here to see the github repo <Github/>
                    </a>
                </div>
                <div 
                    className={`${styles.field} ${styles.link} ${detail.url ? '' : styles.disabled}`}
                >
                    <a href={detail.url} target="_blank" rel="noopener noreferrer">
                        Click here to see the live link <Link/>
                    </a>
                </div>
                <div 
                    className={styles.field}
                    style={{
                        alignItems: 'flex-start',
                        padding: '20px',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <h2 style={{
                        width: '100%'
                    }}>Summary</h2>
                    <p style={{
                        textAlign: 'left',
                        fontSize: '.8rem',
                        marginTop: '5px'
                    }}>{detail.summary}</p>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Detail);