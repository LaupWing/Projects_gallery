import React from 'react'
import styles from './Home.module.css'
import Logo from '../../../components/Logo/Logo'

const Home = ()=>{
    return(
    <>
        <svg className={styles['bg']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1289 2379">
            <path d="M643.5.5Q511.29,78.7,489.69,277.22A480.28,480.28,0,0,1,333,582.49c-1.49,1.34-3,2.67-4.5,4-90.87,75.17-159.44,144.34-210.36,207a516.92,516.92,0,0,0-92.13,480c69.25,221.72,213.66,367.75,394.49,477.08,138.21,91.87,246.74,136.85,344.76,165.25,196.22,56.85,363.69,185.81,467.16,362,19.09,32.48,37.6,65.62,56.08,98.79V.5Z"/>
        </svg>
        <section className={styles.block}>
            <h2 className={styles.name}><Logo/> <p><span>Project</span> <span>Manager</span></p></h2>
            <p className={styles.content}>Welcome on my portfolio website called Project Manager. On this website you can primarily find all the projects I have made throughout my coding career.</p>
            {/* <svg className={styles.bg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
                <path  d="M593.5,1080.5s9.79-332,337.54-355.36c5.21-.38,10.44-.45,15.66-.37,27.27.41,159.4-9.41,339.11-218.83a395.29,395.29,0,0,0,43.29-61.34c29.86-52.3,123.12-181.13,344.36-247.49a99.82,99.82,0,0,0,64.73-60.22C1759.73,80,1810.94-7.67,1920.5.5v1080Z"/>
            </svg> */}
        </section>
        <section className={`${styles.block} ${styles.with_color}`}>
            <p className={styles.content}>Who am I?I am currently a student at the Hoge School van Amsterdam and I live in Heiloo. Im very passioned about code and programming in general. Interested on which programming languages and frameworks I have used? Click on the the skills link above!</p>
        </section>
    </>
    )
}

export default Home