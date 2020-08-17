import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './NavItem.module.css'

const NavItem = props => (
    <li>
        <NavLink
            className={styles.link}
            to={props.link}
            activeClassName={styles.active}
            exact={props.exact}
        >
            {props.children}
        </NavLink>
    </li>
)

export default NavItem