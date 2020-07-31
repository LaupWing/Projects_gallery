import React from 'react';
import styles from './Detail.module.css';
import icon_loader from '../../components/Icons/icons_loader';
import moment from 'moment';

const Detail = ({detail}) => {
    const MadeBy = icon_loader[detail.madeBy];
    const Status = icon_loader[detail.status];
    const Github = icon_loader.github;
    const Link = icon_loader.link;
    return (
        <div className={styles.Detail}>
            <iframe src={detail.url} title="W3Schools Free Online Web Tutorials"></iframe>
            <div className={styles.meta}>
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
                        paddingBottom: '0px',
                        justifyContent: 'center'
                    }}
                >
                    <h2 style={{
                        width: '100%'
                    }}>Stack</h2>
                    <p>{detail.stack.map(x=>{
                        const Cmp = icon_loader[x];
                        return <Cmp/>;
                    })}</p>
                </div>
                <div 
                    className={`${styles.field} ${styles.link}`}
                >
                    Click here to see the github repo <Github/>
                </div>
                <div 
                    className={`${styles.field} ${styles.link}`}
                >
                    Click here to see the live link <Link/>
                </div>
            </div>
        </div>
    );
}

export default Detail;