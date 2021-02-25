import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import BurgerMenu from '../../components/UI/BurgerMenu/BurgerMenu';

import { data } from '../../data';

import styles from './Navigation.module.css';

function Navigation({ scrollToHandler, isMobile, isLaptop, isDesktop }) {
    return (
        <header className={isDesktop ? styles.header : undefined}>
            {isMobile ? (
                <BurgerMenu scrollToHandler={scrollToHandler} data={data} />
            ) : (
                <div className={`${styles.navbarLaptop} row`}>
                    {data.navigation.map((elm, idx) => {
                        return (
                            <li key={idx}>
                                <Link href='#'>
                                    <a onClick={() => scrollToHandler(idx)}>
                                        {elm.text}
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </div>
            )}
        </header>
    );
}

export default Navigation;
