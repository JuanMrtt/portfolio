import React, { forwardRef, useRef, useState } from 'react'
import { data } from '../../data'
import CardExperience from '../UI/CardExperience/CardExperience'
import styles from './Experience.module.css'

const Experience = forwardRef((props, ref) => {
    console.log(data)
    const experienceRef = useRef();
    const [inputText, setInputText] = useState('')

    const scrollToMyRef = () => {
        console.log(presionando)
        window.scroll({
            top: experienceRef.current.offsetTop,
            left: 0,
            behavior: 'smooth',
        });
    };
    const onChangeText = (e) => {
        setInputText(e.target.value)
        console.log(inputText)
    }

    return (
        <div ref={ref} className={`${styles.experience} section`}>
            <h2 className={`title`}> {data.experience.title}</h2>

            <CardExperience
                data={data.experience.experience}
            >

            </CardExperience>

        </div >
    )
})

export default Experience
