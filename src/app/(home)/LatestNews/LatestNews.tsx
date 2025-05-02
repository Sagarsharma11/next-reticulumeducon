import React from 'react';
import styles from "./latest.module.css";

const LatestNews = () => {
    const ytData = [
        "https://www.youtube.com/embed/Eu0GtSxnbOA",
        "https://www.youtube.com/embed/XD5Ug7ljYp0",
        "https://www.youtube.com/embed/0W7OXElajGI",
        "https://www.youtube.com/embed/xWi-ZWzkrJo",
        "https://www.youtube.com/embed/KYpmoc4_4AQ"
    ]
    return (
        <div className={styles.mainContainer}>

            <h2>
                Latest <span className="span2"> News </span>
            </h2>
            <div>
                {
                    ytData.map((ele) => (
                        <iframe className="video" src={ele} title="YouTube video player" 
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    ))
                }
            </div>

        </div>
    )
}

export default LatestNews