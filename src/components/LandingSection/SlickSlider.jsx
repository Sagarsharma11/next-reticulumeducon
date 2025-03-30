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
                        src="/assets/images/slide7.jpeg"
                        className="w-full" />
                    <div class={styles.caption} >
                        <h1>WELCOME TO RETICULUM EDUCON </h1>
                        <p> YOUR SUCCESS IS OUR AIM</p>
                    </div >
                </div>
                <div>
                    <img
                        src="/assets/images/slide8.jpeg"
                        className="w-full" />
                </div>
                <div>
                    <img
                        src="/assets/images/slide9.jpeg"
                        className="w-full" />
                </div>
                <div>
                    <img
                        src="/assets/images/slidex.jpeg"
                        className="w-full" />
                </div>
            </Slider>

        </>
    );
}