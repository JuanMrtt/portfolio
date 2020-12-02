import React, { useState } from 'react'
import CustomButton from '../../CustomComponents/CustomButton/CustomButton';
import styles from './CardExperience.module.css';

const CardExperience = ({ data }) => {

    const [company, setCompany] = useState(data[0]);
    const [isActive, setIsActive] = useState(0);

    const handleClick = (company) => {
        setIsActive(company.id)
        setCompany(company)
    }

    return (
        <div className={`${styles.container} row`}>

            <div className={`${styles.jobs} col-lg-2 col-md-2 col-sm-2`}>
                <ul>
                    {data.map(elm =>
                        <li key={elm.company}>
                            <CustomButton
                                key={elm.company}
                                onClick={() => handleClick(elm)}
                                customStyles={`${isActive === elm.id && styles.button_active}`}
                                active={isActive}
                            >
                                {elm.company}
                            </CustomButton>
                        </li>
                    )}

                </ul>
            </div>
            {company &&
                <div className={`${styles.details} col-lg-10 col-md-10 col-sm-10`}>
                    <h3>{company.jobTitle} - <span>{company.company}</span></h3>
                    <p>{company.from} - {company.till}</p>
                    <div className={styles.pointers}>

                        <ul>
                            {company.description.map(elm =>
                                <li key={elm}>{elm}</li>)}
                        </ul>

                    </div>
                </div>
            }
        </div >
    )
}

export default CardExperience
