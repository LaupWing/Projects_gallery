import React, {Suspense} from 'react';
import styles from './Icons.module.css';
import {connect} from 'react-redux'

const Icons = ({filters}) => {
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
                    return <Component key={i} filters={filters}/>;
                })}
            </Suspense>
        </div>
    );
}

const mapStateToProps = state =>{
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(Icons);
