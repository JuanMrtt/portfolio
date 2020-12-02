import React, { forwardRef, useRef } from 'react'
import { data } from '../../data'
import styles from './AboutMe.module.css'


const AboutMe = forwardRef((props, ref) => {

    const scrollToMyRef = () => {
        window.scroll({
            top: aboutMeRef.current.offsetTop,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        // <div className={styles.aboutme}>
        <div ref={ref} className={`${styles.aboutme} section`}>
            <h2 className={`title`}> {data.aboutMe.title}</h2>
            <p>{data.aboutMe.paragraph_1}</p>
            <p>{data.aboutMe.paragraph_2}</p>
            <p>{data.aboutMe.paragraph_3}</p>
        </div>
    )
}
)
export default AboutMe
