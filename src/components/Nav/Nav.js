import React from 'react'
import styles from './Nav.module.css'


const Nav = (props)=>{
    return (
        <nav className={styles.Nav}>
            <li>Logo</li>
            <li>Home</li>
            <li>Projects</li>
        </nav>
    )
}

export default Nav