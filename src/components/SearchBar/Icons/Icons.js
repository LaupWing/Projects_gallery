import React, {Suspense} from 'react';
import styles from './Icons.module.css';

const Icons = () => {
    const icons = [
        'Django', 
        'Electron', 
        'Firebase', 
        'Javascript', 
        'Laravel', 
        'Mongodb'
    ];

    return (
        <div className={styles.icons}>
            <Suspense fallback={<div>Loading...</div>}>
                {icons.map((icon, i)=>{
                    const Component = React.lazy(() =>
                        import(`../../Icons/${icon}/${icon}`)
                    );
                    return <Component key={i}/>;
                })}
            </Suspense>
        </div>
    );
}

export default Icons;
