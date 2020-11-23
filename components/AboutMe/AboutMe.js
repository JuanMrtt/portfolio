import React, { forwardRef, useRef } from 'react'
import { data } from '../../data'
import styles from './AboutMe.module.css'


const AboutMe = forwardRef((props, ref) => {

    const scrollToMyRef = () => {
        console.log('presionando aboutme')
        window.scroll({
            top: aboutMeRef.current.offsetTop,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        // <div className={styles.aboutme}>
        <div ref={ref}>
            <h1>{data.aboutMe.title}</h1>
            <p>{data.aboutMe.paragraph_1}</p>
            <p>{data.aboutMe.paragraph_2}</p>
            <p>{data.aboutMe.paragraph_3}</p>
        </div>
    )
}
)
export default AboutMe
