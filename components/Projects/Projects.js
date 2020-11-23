import React, { forwardRef } from 'react'
import { data } from '../../data'

const Projects = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <h1>{data.projects.title}</h1>

            {data && data.projects.projects.map(project =>
                (
                    <div>
                        <h3>{project.name}</h3>
                        <p>{project.type}</p>
                        <p>{project.description}</p>
                        <p>{project.github}</p>
                        <p>{project.url}</p>
                        <ul>
                            {project.technologies.map(elm => <li>{elm}</li>)}
                        </ul>
                    </div>
                )
            )}
        </div>
    )
})

export default Projects
