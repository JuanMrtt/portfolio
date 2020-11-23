import React, { forwardRef, useRef, useState } from 'react'
import { data } from '../../data'
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
        <div ref={ref} className={styles.experience}>
            <h1>{data.experience.title}</h1>
            <input style={{ backgroundColor: 'blue', color: 'white' }} onChange={(e) => onChangeText(e)}></input>
            <button onClick={() => console.log(inputText)}>Submit</button>
            {data && data.experience.experience.map(experience =>
                (
                    <div>
                        <h3>{experience.jobTitle}</h3>
                        <p>{experience.company}</p>
                        <p>{experience.from} - {experience.till}</p>
                        <ul>
                            {experience.description.map(elm => <li>{elm}</li>)}
                        </ul>
                    </div>
                )
            )}
        </div >
    )
})

export default Experience
