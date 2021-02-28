import React, { forwardRef, useState, useEffect } from 'react';
import firebase from '../../firebase';

import styles from './AboutMe.module.css';

const AboutMe = forwardRef((props, ref) => {
    const database = firebase.database().ref('aboutMe');
    const [data, setData] = useState();

    useEffect(() => {
        database.once('value', function (snapshot) {
            setData(snapshot.val());
        });
    }, []);

    const scrollToMyRef = () => {
        window.scroll({
            top: aboutMeRef.current.offsetTop,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div ref={ref} className={`${styles.aboutme} section`}>
            {data && (
                <>
                    <h2 className={`title`}> {data.title}</h2>
                    <p>{data.paragraph_1}</p>
                    <p>{data.paragraph_2}</p>
                    <p>{data.paragraph_3}</p>
                </>
            )}
        </div>
    );
});
export default AboutMe;
