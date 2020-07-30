import React from 'react';
import styles from './Detail.module.css';

const Detail = ({detail}) => {
    return (
        <div className={styles.Detail}>
            <iframe src={detail.url} title="W3Schools Free Online Web Tutorials"></iframe>
        </div>
    );
}

export default Detail;
