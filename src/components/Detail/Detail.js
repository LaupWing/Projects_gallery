import React from 'react';
import styles from './Detail.module.css';
import icon_loader from '../../components/Icons/icons_loader';

const Detail = ({detail}) => {
    console.log(detail)
    const MadeBy = icon_loader[detail.madeBy];
    const Status = icon_loader[detail.status];
    return (
        <div className={styles.Detail}>
            <iframe src={detail.url} title="W3Schools Free Online Web Tutorials"></iframe>
            <div className={styles.meta}>
                <div className={styles.field}>
                    <h2>Name</h2>
                    <p>{detail.title}</p>
                </div>
                <div className={styles.field}>
                    <h2>Status</h2>
                    <p><Status/></p>
                </div>
                <div className={styles.field}>
                    <h2>Made By</h2>
                    <p><MadeBy/></p>
                </div>
            </div>
        </div>
    );
}

export default Detail;
