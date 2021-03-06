import React from 'react'
import styles from './Home.module.css'
import Logo from '../../../components/Logo/Logo'
import Icon from './Icon/Icon'
const laptop = require('../../../assets/other/laptop.svg')
const profile = require('../../../assets/other/profile_placeholder.png')
const madeByStatus = require('../../../assets/home/madeByStatus.gif')
const sortBy = require('../../../assets/home/sortBy.gif')
const filterBySkills = require('../../../assets/home/filterBySkills.gif')

const Home = ()=>{
    const icons = [
        'django',
        'electron',
        'firebase',
        'laravel',
        'mongodb',
        'node',
        'php',
        'python',
        'react',
        'vue',
        'javascript',
        'css',
        'github',
        'flutter',
        'typescript']
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
                <div className={styles.block_content}>
                    <p className={styles.content}>Who am I?I am currently a Communcation Multimedia Design (Web Design) student at the Hoge School van Amsterdam and I live in Heiloo. Im very passioned about code and programming in general. Below you can find a little overview of the frameworks/languages I have used. To find more info about the skills/projects I have done, navigate to that specifik part of this site by using the top navigation</p>
                </div>
                <img className={styles.is_50} src={profile} alt="profile-placholder" />
                <div className={styles.icons}>
                    {icons && icons.map(icon=><Icon key={icon} icon={icon}/>)}
                </div>
            </section>

            <h2 className={styles.banner}>Why only show your projects and skills?</h2>
            <p>Because the way to show you are competent in coding is by showing working projects, or at least show that you are actively coding. This website is build to easily navigate through my projects, by using the sorting/filtering system on the top. Need a little explaination abou thow to use this website? Read the text below!</p>
            <h2 className={styles.banner}>How to use this?</h2>
            <p>Below you can find an explaination of how you can use this website to browse through the projects and what you can do with it. The explaination are about the sections Projects and Skills of this website. You can go to the Projects/Skills sections by using the links on top of this website.</p>
            <h2 className={styles.banner}>Projects: Filter Made By/Status</h2>
            <p>By clicking on the icons you can filterout the projects. In Made By you can filter by project made by myself or made by following a tutorial. In Status you can filter by finished or unfinished projects</p>
            <img alt="Filter Projects" className={styles.gif} src={madeByStatus}/>
            <h2 className={styles.banner}>Projects: Sorting</h2>
            <p>In the Sort section, you can sort the projects. The star sorts the projects by my favorites projects, and the arrows sorts the projects by date.</p>
            <img alt="Sort By Projects" className={styles.gif} src={sortBy}/>
            <h2 className={styles.banner}>Projects: Filter By Skills</h2>
            <p>And as the last you can filter by the skills used in a specifik project. Toggle the skill on to activate it, and toggle it out to filter it out.</p>
            <img alt="Filter Projects" className={styles.gif} src={filterBySkills}/>
        </>
    )
}

export default Home