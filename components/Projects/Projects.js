import React, { forwardRef } from 'react'
import { data } from '../../data'

const Projects = forwardRef((props, ref) => {
    return (
        <div ref={ref} className={` section`}>
            <h2 className={`title`}> {data.projects.title}</h2>

            {data && data.projects.projects.map(project =>
                (
                    <div key={project.name}>
                        <h3>{project.name}</h3>
                        <p>{project.type}</p>
                        <p>{project.description}</p>
                        <p>{project.github}</p>
                        <p>{project.url}</p>
                        <ul>
                            {project.technologies.map(elm => <li key={elm}>{elm}</li>)}
                        </ul>
                    </div>
                )
            )}
        </div>
    )
})

export default Projects
