import React from 'react';
import styles from "../../Section3/style.module.css"

const TeamCard = ({ ele }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={ele.image} alt="team image" />
        <div>
          <p>
            {ele.name}
          </p>
          <p>{ele.title}</p>
        </div>
      </div>
      <div className={styles.descContainer}>

        <p>
          {ele.desc}
        </p>

      </div>
    </div>
  )
}

export default TeamCard