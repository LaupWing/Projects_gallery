import React from 'react'
import Logo from '../../../components/Logo/Logo'
import styles from './Home.module.css'

const Home = ()=>{
    return(
    <>
        <h2 className={styles.name}><Logo/><span>Project</span> <span>Manager</span></h2>
    </>
    )
}

export default Home