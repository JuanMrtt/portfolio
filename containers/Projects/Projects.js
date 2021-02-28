import React, { forwardRef, useState, useEffect } from 'react';
import firebase from '../../firebase';

const Projects = forwardRef((props, ref) => {
    const database = firebase.database().ref('projects');
    const [data, setData] = useState();

    useEffect(() => {
        database.once('value', function (snapshot) {
            setData(snapshot.val());
        });
    }, []);

    return (
        <div ref={ref} className={` section`}>
            {data && (
                <>
                    <h2 className={`title`}> {data.projects.title}</h2>
                    {data.projects.map(project => (
                        <div key={project.name}>
                            <h3>{project.name}</h3>
                            <p>{project.type}</p>
                            <p>{project.description}</p>
                            <p>{project.github}</p>
                            <p>{project.url}</p>
                            <ul>
                                {project.technologies.map(elm => (
                                    <li key={elm}>{elm}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
});

export default Projects;
