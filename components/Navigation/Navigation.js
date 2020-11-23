import React from 'react'
import { data } from '../../data'
import styles from './Navigation.module.css';

function Navigation({ scrollToHandler }) {
    console.log(data)
    return (
        <header className={styles.header}>
            <ul className={`${styles.nav} row`}>
                <li>
                    <a onClick={() => scrollToHandler(0)}>{data.navigation.aboutMe}</a>
                </li>
                <li>
                    <a onClick={() => scrollToHandler(1)}>{data.navigation.experience}</a>
                </li>
                <li>
                    <a onClick={() => scrollToHandler(2)}>{data.navigation.projects}</a>
                </li>
                <li>
                    <a onClick={() => scrollToHandler(3)}>{data.navigation.contact}</a>
                </li>
            </ul>
        </header >
    )
}

export default Navigation
