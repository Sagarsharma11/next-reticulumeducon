import React from 'react';
import styles from "./aboutsection.module.css"

const AboutSection = () => {
    return (
        <div className={styles.mainContainer}>
            <h1>
                ABOUT US
            </h1>
            <div className={styles.contentContainer}>
                <div className={styles.imageContainer}>
                    <img src="assets/images/Naushad Alam1.jpeg" alt="" />
                    <p className="text-center fw-bold">
                        Naushad Alam <br />(Founder & M.D.)
                    </p>
                </div>
                <div className={styles.paraContainer}>
                    <p>
                        Reticulum Educon is a leading platform for students who require reliable
                        and authentic counseling for their future in MEDICINE field.
                        Mr. Naushad Alam is the founder and managing director of this company.
                        Here we put forward all the possible and available options to you so that you are
                        never short of the options and you don’t have to compromise with your DREAM .
                    </p>
                    <br />
                    <br />
                    <p>
                        Here in Reticulum we allow students to First, think about what they really want Second , dream about their perfect possible option and then Third , believe in us for being unerring with their career and then Fourth , dare to strive through this enduring path of being a DOCTOR .
                    </p>

                </div>
            </div>
        </div>
    )
}

export default AboutSection