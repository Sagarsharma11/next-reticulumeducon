"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css"
import styles from "./mbbs.module.css";

const MbbsAbroad = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 5,  // Default for larger screens
        slidesToScroll: 3, // Default for larger screens
        responsive: [
            {
                breakpoint: 1025, // For tablets & small desktops
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768, // For tablets & smaller devices
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480, // For mobile phones
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false, // Hides dots for small screens (optional)
                }
            }
        ]
    };

    const flagList = [
        {
            img: '/assets/images/university/6be80133c252bddd1bee9d0ce33ae9be-1.jpg',
            country: " Petrozavodsk State Medical University"
        },
        {
            img: '/assets/images/university/MAHSA-University-Whole-Campus-Area-Malaysia.jpg',
            country: "Mahsa University"
        },
        {
            img: '/assets/images/university/Belarus state medical university_0.jpg',
            country: " Kazakhstan"
        },
        {
            img: '/assets/images/university/blog326-CBfYgdpUgAA0-Y5.jpg',
            country: "Kazan Federal University"
        },
        {
            img: '/assets/images/university/blog185-BASHKIR STATE MEDICAL UNIVERSITY , MBBS IN RUSSIA_1.png',
            country: "Bashkir State Medical University"
        },
        {
            img: '/assets/images/university/Gomel-State-Medical-University.jpg',
            country: "Gomel State Medical University"
        },
        {
            img: '/assets/images/university/M__Kozybayev_North_Kazakhstan_State_University,_Petropav.jpg',
            country: "North Kazakhstan State University"
        },
        {
            img: '/assets/images/university/samarkand.jpeg',
            country: "Samarkand state university"
        },
    ]

    return (
        <div className={styles.mainContainer}>
            <div className={styles.textContainer}>
                <h1>
                UNIVERSITIES TO STUDY MBBS{" "}
                    <span>
                        ABROAD ?
                    </span>
                </h1>
            </div>
            <Slider className="university-slider"  {...settings}>
                {
                    flagList.map((ele) => (
                        <div>
                            <img
                                src={ele.img}
                                className="w-full" />
                            <small className="flex justify-center font-bold pt-1">
                                {ele.country}
                            </small>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default MbbsAbroad