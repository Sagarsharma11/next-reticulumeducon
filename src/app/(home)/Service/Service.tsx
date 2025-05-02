import React from 'react';
import styles from "./service.module.css";

const Service = () => {
    const points = [
        " One to one intrection with the people and their guardian",
        `Unmatched exposure to top notch University of countries like Russia, Belarus, Kazakhstan,
                        Philippines, Malaysia, Nepal, Uzbekistan, Ukraine, Kyrgyzstan, Georgia ,Azerbaijan`,
        ` All processing of Passport, Visa Stamping, Documantation, Dollers exchange etc by the consultancy`,
        `Local guardianship & mentorship throught education`,
        `Country to the population belief, education abroad is cost effective and with in budget`,
        `All the colleges and universities should be NMC/WHO APPROVED`
    ]
    return (
        <div className={styles.mainContainer}>
            <h2>
                Services <span className="span2">
                    We Provide
                </span>
            </h2>
            <div>
                <ul>
                    {
                        points.map((ele, key) => (<li key={key}>{(++key + ". ") + ele}</li>))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Service