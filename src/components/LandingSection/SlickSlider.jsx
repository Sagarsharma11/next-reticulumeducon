"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css"
import styles from "./slider.module.css"


export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <>
            <Slider className="landing-slider" {...settings}>
                <div>
                    <img
                        src="/assets/images/slider/slide1.jpg"
                        className="w-full" />
                    <div className={styles.caption} >
                        <h1>WELCOME TO RETICULUM EDUCON </h1>
                        <p> YOUR SUCCESS IS OUR AIM</p>
                    </div >
                </div>
                <div>
                    <img
                        src="/assets/images/slider/slide2.jpg"
                        className="w-full" />
                </div>
                <div>
                    <img
                        src="/assets/images/slider/slide3.jpg"
                        className="w-full" />
                </div>
                {/* <div>
                    <img
                        src="/assets/images/slider/slide1.jpg"
                        className="w-full" />
                </div> */}
            </Slider>

        </>
    );
}