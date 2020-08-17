import React from 'react'
import styles from './Nav.module.css'
import NavItem from './NavItem/NavItem'
import Logo from '../Logo/Logo'

const Nav = ()=>{
    return (
        <nav className={styles.Nav}>
            <li><Logo/></li>
            <NavItem
                link="/"
                exact
            >
                Home
            </NavItem>
            <NavItem
                link="/projects"
            >
                Projects
            </NavItem>
            <NavItem
                link="/skills"
            >
                skills
            </NavItem>
        </nav>
    )
}

export default Nav