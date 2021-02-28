import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import firebase from '../../firebase';

import BurgerMenu from '../../components/UI/BurgerMenu/BurgerMenu';

import styles from './Navigation.module.css';

function Navigation({ scrollToHandler, isMobile, isLaptop, isDesktop }) {
    const database = firebase.database().ref('navigation');
    const [data, setData] = useState();

    useEffect(() => {
        database.once('value', function (snapshot) {
            setData(snapshot.val());
        });
    }, []);

    return (
        <header className={isDesktop ? styles.header : undefined}>
            {data && (
                <>
                    {isMobile ? (
                        <BurgerMenu
                            scrollToHandler={scrollToHandler}
                            data={data}
                        />
                    ) : (
                        <div className={`${styles.navbarLaptop} row`}>
                            {data.map((elm, idx) => {
                                return (
                                    <li key={idx}>
                                        <Link href='#'>
                                            <a
                                                onClick={() =>
                                                    scrollToHandler(idx)
                                                }
                                            >
                                                {elm.text}
                                            </a>
                                        </Link>
                                    </li>
                                );
                            })}
                        </div>
                    )}
                </>
            )}
        </header>
    );
}

export default Navigation;
