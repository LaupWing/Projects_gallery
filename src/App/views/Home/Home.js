import React from 'react'
import styles from './Home.module.css'
import Logo from '../../../components/Logo/Logo'
const laptop = require('../../../assets/other/laptop.svg')

const Home = ()=>{
    return(
    <>
        <svg className={styles['bg']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1289 2379">
            <path d="M643.5.5Q511.29,78.7,489.69,277.22A480.28,480.28,0,0,1,333,582.49c-1.49,1.34-3,2.67-4.5,4-90.87,75.17-159.44,144.34-210.36,207a516.92,516.92,0,0,0-92.13,480c69.25,221.72,213.66,367.75,394.49,477.08,138.21,91.87,246.74,136.85,344.76,165.25,196.22,56.85,363.69,185.81,467.16,362,19.09,32.48,37.6,65.62,56.08,98.79V.5Z"/>
        </svg>
        <section className={styles.block}>
            <div 
                className={styles.block_content}
                style={{
                    marginTop: '10%'
                }}
            >
                <h2 className={styles.name}><Logo/> <p><span>Project</span> <span>Manager</span></p></h2>
                <p className={styles.content}>Welcome on my portfolio website called Project Manager. On this website you can primarily find all the projects I have made throughout my coding career.</p>
            </div>
            <img alt="laptop" className={styles.laptop} src={laptop} />
        </section>
        <section className={`${styles.block} ${styles.with_color}`}>
            <p className={styles.content}>Who am I?I am currently a student at the Hoge School van Amsterdam and I live in Heiloo. Im very passioned about code and programming in general. Interested on which programming languages and frameworks I have used? Click on the the skills link above!</p>
        </section>
    </>
    )
}

export default Home