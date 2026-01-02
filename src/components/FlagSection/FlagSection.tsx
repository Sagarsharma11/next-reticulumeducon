"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css"
import styles from "./flag.module.css";

const FlagSection = () => {
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     // slidesToShow: 1,
    //     // slidesToScroll: 1,
    //     autoplay: true,
    //     // speed: 2000,
    //     autoplaySpeed: 2000,
    //     cssEase: "linear",
    //     slidesToShow: 5,
    //     slidesToScroll: 3
    // };


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
            img: '/assets/images/russia.png',
            country: "Russia"
        },
        {
            img: '/assets/images/belarus.png',
            country: "Belarus"
        },
        {
            img: '/assets/images/kazakistan.png',
            country: " Kazakhstan"
        },
        {
            img: '/assets/images/philipens.png',
            country: "Philippines"
        },
        {
            img: '/assets/images/malysia.png',
            country: "Malaysia"
        },
        {
            img: '/assets/images/nepal.jpg',
            country: " Nepal"
        },
        {
            img: '/assets/images/uzbakistan.jpg',
            country: "Uzbekistan"
        }
        ,
        {
            img: '/assets/images/ukrain.png',
            country: "Ukraine"
        }
        ,
        {
            img: '/assets/images/kirgistan.png',
            country: "Kyrgyzstan"
        }
        ,
        {
            img: '/assets/images/georgia.jpg',
            country: "Georgia"
        },
        {
            img: '/assets/images/ajarbejain.jpg',
            country: "Azerbaijan"
        }
    ]

    return (
        <div className={styles.mainContainer}>
            <div className={styles.textContainer}>
                <h1>
                    COUNTRIES TO STUDY MBBS{" "}
                    <span>
                        ABROAD
                    </span>
                </h1>
            </div>
            <Slider className="country-slider"  {...settings}>
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

export default FlagSection