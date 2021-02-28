import React, { forwardRef, useState, useEffect } from 'react';
import firebase from '../../firebase';

import styles from './Footer.module.css';

const Footer = forwardRef((props, ref) => {
    const database = firebase.database().ref('footer');
    const [data, setData] = useState();

    useEffect(() => {
        database.once('value', function (snapshot) {
            setData(snapshot.val());
        });
    }, []);

    return (
        <div ref={ref} className={` ${styles.footer}`}>
            <div className={` ${styles.footerCard}`}>
                {data && (
                    <>
                        <a href={`${data.link}`}>
                            <div>
                                <p>{data.title}</p>
                                <p>{data.subtitle}</p>
                            </div>
                        </a>
                    </>
                )}
            </div>
        </div>
    );
});

export default Footer;
