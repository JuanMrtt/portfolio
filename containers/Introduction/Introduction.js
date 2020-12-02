import React, { forwardRef } from 'react'
import { data } from '../../data'

const Projects = forwardRef((props, ref) => {
    return (
        <div ref={ref} className={` section`}>

            {data &&
                (
                    <div>
                        <h3>{data.introduction.preTitle}</h3>
                        <h1>{data.introduction.title}</h1>
                        <p>{data.introduction.paragraph_1}</p>

                        <button>Contactame</button>

                    </div>
                )
            }
        </div>
    )
})

export default Projects
