import React, { useState } from 'react';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import styles from './BurgerMenu.module.css';

const BurgerMenu = ({ scrollToHandler, data }) => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className={`${styles.navbar}`}>
                <Link href='#'>
                    <a className={`${styles.menuBars}`}>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </a>
                </Link>
            </div>

            <nav
                className={
                    sidebar
                        ? `${styles.navMenu} ${styles.active}`
                        : `${styles.navMenu}`
                }
            >
                <ul className={`${styles.navMenuItems}`} onClick={showSidebar}>
                    <li className={`${styles.navbarToogle}`}>
                        <Link href='#'>
                            <a className={styles.menuBars}>
                                <AiIcons.AiOutlineClose />
                            </a>
                        </Link>
                    </li>
                    {data.navigation.map((elm, idx) => {
                        return (
                            <li key={idx} className={`${styles.navText}`}>
                                <Link href='#' className={`${styles.menuBars}`}>
                                    <a onClick={() => scrollToHandler(idx)}>
                                        {elm.text}
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default BurgerMenu;
