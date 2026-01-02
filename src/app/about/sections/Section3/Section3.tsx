import React from 'react'
import styles from "./style.module.css"
import TeamCard from '../components/TeamCard/TeamCard'

const Section3 = () => {
    const data = [
        {
            name: "Naushad Alam",
            title: `(Founder & M.D.)`,
            image: `/assets/images/Naushad Alam1.jpeg`,
            desc: `  He is the founder and managing director of Reticulum educon LLP . He has relentlessly worked
                    towards the educational upliftment of the student by searching for the best universities aboard
                    .
                    He takes personal interest in the well- being and safety of each and every student that goes for
                    education aboard through our company . It is because of his commitment, sincerity,hard work,
                    personal concern that we have been able to send so many students aboard for education specially
                    mbbs.`
        },
        {
            name: "Tanzil Ahmad",
            title: `( Director)`,
            image: `/assets/images/tanjil ahmed1.jpeg`,
            desc: `He is the director of Reticulum educon LLP. He has devoted his entire time for the development of the company . His personal connect and relation with students has helped many students to trust and choose our company for mbbs aboard and also helped us understand and resolve any problems faced by the students .`
        },
        {
            name: "Mr.shaban Ahmad",
            title: `(Legal Advisor)`,
            image: `/assets/images/Mr.shaban Ahmad .jpeg`,
            desc: ` Mr. Shaban Ahmad is having vast experience in field of International commercial contract management, Legal compliance, commercial & corporate litigation, contract & policy drafting, insolvency & bankruptcy cases and many more.

                    He will be dealing with legal department of  reticulum educon llp.

                    Having Mr. Shaban Ahmad on board as a legal advisor is an astonishing achievement for Reticulum educon LLP. `
        }
    ]
    return (
        <div className={styles.mainContainer}>
            <p className={styles.containerTitle}>
                Our Team
            </p>
            <div className={styles.innerContainer}>

                {
                    data.map((ele, key) => (
                        <div key={key}>
                            <TeamCard ele={ele} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Section3