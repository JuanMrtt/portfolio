import React, { forwardRef, useEffect, useState } from 'react';
import firebase from '../../firebase';

const Projects = forwardRef((props, ref) => {
    const database = firebase.database().ref('introduction');
    const [data, setData] = useState();

    useEffect(() => {
        database.once('value', function (snapshot) {
            setData(snapshot.val());
        });
    }, []);

    return (
        <div ref={ref} className={` section`}>
            {data && (
                <div>
                    <h3>{data.preTitle}</h3>
                    <h1>{data.title}</h1>
                    <p>{data.paragraph_1}</p>

                    <button>Contactame</button>
                </div>
            )}
        </div>
    );
});

export default Projects;
