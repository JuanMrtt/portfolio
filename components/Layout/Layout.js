import React, { useRef } from 'react'
import AboutMe from '../AboutMe/AboutMe'
import Navigation from '../Navigation/Navigation';
import styles from './Layout.module.css'

function Layout({ children, scrollToHandler }) {


    return (
        <>
            <Navigation scrollToHandler={scrollToHandler}></Navigation>

            <div className={styles.layout}>
                {children}
            </div>
        </>
    )
}

export default Layout
