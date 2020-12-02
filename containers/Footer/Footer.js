import React, { forwardRef } from 'react'
import styles from './Footer.module.css'
import { data } from '../../data'

const Footer = forwardRef((props, ref) => {
    return (
        <div ref={ref} className={` ${styles.footer}`}>
            <div className={` ${styles.footerCard}`}>
                <a href={`${data.footer.link}`}>
                    <div>
                        <p>{data.footer.title}</p>
                        <p>{data.footer.subtitle}</p>
                    </div>
                </a>
            </div>
        </div>
    )
})

export default Footer
