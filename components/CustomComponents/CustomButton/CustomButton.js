import React, { useState } from 'react'
import styles from './CustomButton.module.css'

const CustomButton = ({ customStyles = "", onClick, active = false, children }) => {
    const [isActive, setIsActive] = useState(active);

    return (
        <button
            className={`${styles.button} ${customStyles && customStyles}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default CustomButton
