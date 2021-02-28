import React, { forwardRef, useRef, useState, useEffect } from 'react';
import firebase from '../../firebase';

import CardExperience from '../../components/UI/CardExperience/CardExperience';

import styles from './Experience.module.css';

const Experience = forwardRef((props, ref) => {
    const experienceRef = useRef();
    const [inputText, setInputText] = useState('');

    const database = firebase.database().ref('experience');
    const [data, setData] = useState();

    useEffect(() => {
        database.once('value', function (snapshot) {
            setData(snapshot.val());
        });
    }, []);

    const scrollToMyRef = () => {
        window.scroll({
            top: experienceRef.current.offsetTop,
            left: 0,
            behavior: 'smooth',
        });
    };
    const onChangeText = e => {
        setInputText(e.target.value);
    };

    return (
        <div ref={ref} className={`${styles.experience} section`}>
            {data && (
                <>
                    <h2 className={`title`}> {data.title}</h2>

                    <CardExperience data={data.experience}></CardExperience>
                </>
            )}
        </div>
    );
});

export default Experience;
