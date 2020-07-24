import React from 'react'
import styles from './Nav.module.css'
import NavItem from './NavItem/NavItem'

const Nav = (props)=>{
    return (
        <nav className={styles.Nav}>
            <li>Logo</li>
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
        </nav>
    )
}

export default Nav