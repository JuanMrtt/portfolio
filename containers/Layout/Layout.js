import React, { useRef } from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './Layout.module.css';

function Layout({ children, scrollToHandler, isMobile, isLaptop, isDesktop }) {
    return (
        <>
            <Navigation
                scrollToHandler={scrollToHandler}
                isMobile={isMobile}
                isLaptop={isLaptop}
                isDesktop={isDesktop}
            />

            <div className={styles.layout}>{children}</div>
        </>
    );
}

export default Layout;
