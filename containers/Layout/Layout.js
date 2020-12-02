import React, { useRef } from 'react'
import AboutMe from '../AboutMe/AboutMe'
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import styles from './Layout.module.css'

function Layout({ children, scrollToHandler }) {


    return (
        <>
            <Navigation scrollToHandler={scrollToHandler} />

            <div className={styles.layout}>
                {children}
            </div>

        </>
    )
}

export default Layout
