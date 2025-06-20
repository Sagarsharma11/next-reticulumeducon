import React from 'react'
import styles from "./style.module.css"
import TeamCard from '../components/TeamCard/TeamCard'



const Section3 = () => {
    const data = [
        {
            name: "Naushad Alam",
            title: `(Founder & M.D.)`,
            message:`Message from the Chairman`,
            image: `/assets/images/Naushad Alam1.jpeg`,
            desc: ` 
            Dear students and Parents
At Reticulum Educon LLP, our mission is to empower students by providing them with access to world-class educational opportunities across the globe. We believe that education is the foundation for a successful future, and we are proud to guide aspiring individuals toward achieving their dreams through international education.

Over the years, I have taken personal interest in the academic growth, safety, and overall well-being of every student who chooses our consultancy. Our strength lies in identifying the best universities abroad, especially for MBBS and other professional courses, ensuring not just quality education but also a safe and supportive environment.

It is through sincere commitment, relentless hard work, and genuine concern for our students that we have been able to send hundreds of students abroad to pursue their education. The trust that students and their families place in us is our greatest motivation and the reason we continue to grow and excel in what we do.

At Reticulum Educon, we are not just consultants—we are partners in your journey toward a brighter, global future.
We are proud to be a part of your success stories and we remain committed to shaping many more in the future.             
            `,
            foot: ` Chairman, Reticulum Educon LLP`
        },
        {
            name: "Tanzil Ahmad",
            title: `( Director)`,
                 message:`Message from the Director`,
            image: `/assets/images/tanjil ahmed1.jpeg`,
            desc: `
            
            At Reticulum Educon LLP, as a director my journey has always been centered around one core vision — to empower students in achieving their dream of studying MBBS abroad with confidence and clarity.  

From the very beginning, I have wholeheartedly dedicated my time and efforts to the growth of this organization. What truly drives me is the personal bond we build with each student — a connection based on trust, understanding, and genuine care.  

It is this relationship that has helped countless students place their faith in us. By staying closely connected with them, we’ve not only guided them towards the right opportunities but have also stood by them in resolving challenges, both big and small.  

At Reticulum Educon, we don’t just send students abroad — we walk every step of the journey with them. Your dreams are our mission, and your success is our greatest reward.
            `,
            foot: ` Chairman, Reticulum Educon LLP`
        },
        // {
        //     name: "Mr.shaban Ahmad",
        //     title: `(Legal Advisor)`,
        //     image: `/assets/images/Mr.shaban Ahmad .jpeg`,
        //     desc: ` Mr. Shaban Ahmad is having vast experience in field of International commercial contract management, Legal compliance, commercial & corporate litigation, contract & policy drafting, insolvency & bankruptcy cases and many more.

        //             He will be dealing with legal department of  reticulum educon llp.

        //             Having Mr. Shaban Ahmad on board as a legal advisor is an astonishing achievement for Reticulum educon LLP. `
        // }
    ]
    return (
        <div className={styles.mainContainer}>

            <div className={styles.innerContainer}>

                {
                    data.map((ele, key) => (
                        <div className={styles.innerBox} key={key}>
                            <p className={styles.containerTitle}>
                                {ele.message} <br />
                                Reticulum Educon LLP
                            </p>
                            <TeamCard ele={ele} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Section3