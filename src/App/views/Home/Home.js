import React from 'react'
import styles from './Home.module.css'
import Logo from '../../../components/Logo/Logo'

const Home = ()=>{
    return(
    <>
        <h2 className={styles.name}><Logo/> <p><span>Project</span> <span>Manager</span></p></h2>
        <p className={styles.content}>Welcome on my portfolio website called Project Manager. On this website you can primarily find all the projects I have made throughout my coding career.</p>
        <p className={styles.content}>Who am I?I am currently a student at the Hoge School van Amsterdam and I live in Heiloo. Im very passioned about code and programming in general. Interested on which programming languages and frameworks I have used? Click on the the skills link above!</p>
    </>
    )
}

export default Home