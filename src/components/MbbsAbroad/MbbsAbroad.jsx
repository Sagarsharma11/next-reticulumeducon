"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MbbsAbroad = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "ease-in-out",
        slidesToShow: 4,  
        slidesToScroll: 2, 
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1280, 
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '20px'
                }
            }
        ]
    };

    const universityList = [
        {
            img: '/assets/images/university/6be80133c252bddd1bee9d0ce33ae9be-1.jpg',
            name: "Petrozavodsk State Medical University",
            country: "Russia"
        },
        {
            img: '/assets/images/university/MAHSA-University-Whole-Campus-Area-Malaysia.jpg',
            name: "Mahsa University",
            country: "Malaysia"
        },
        {
            img: '/assets/images/university/Belarus state medical university_0.jpg',
            name: "Belarus State Medical University",
            country: "Belarus"
        },
        {
            img: '/assets/images/university/blog326-CBfYgdpUgAA0-Y5.jpg',
            name: "Kazan Federal University",
            country: "Russia"
        },
        {
            img: '/assets/images/university/blog185-BASHKIR STATE MEDICAL UNIVERSITY , MBBS IN RUSSIA_1.png',
            name: "Bashkir State Medical University",
            country: "Russia"
        },
        {
            img: '/assets/images/university/Gomel-State-Medical-University.jpg',
            name: "Gomel State Medical University",
            country: "Belarus"
        },
        {
            img: '/assets/images/university/M__Kozybayev_North_Kazakhstan_State_University,_Petropav.jpg',
            name: "North Kazakhstan State University",
            country: "Kazakhstan"
        },
        {
            img: '/assets/images/university/samarkand.jpeg',
            name: "Samarkand State University",
            country: "Uzbekistan"
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-white relative border-t border-gray-100 overflow-hidden">
            <style jsx global>{`
                .uni-slider .slick-slide { padding: 0 12px; }
            `}</style>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 shadow-orange-500/20 inline-block px-3 py-1 bg-orange-50 rounded-full">Top Institutions</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        Top Universities for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">MBBS Abroad</span>
                    </h2>
                </div>
                
                <div className="mx-[-12px]">
                    <Slider className="uni-slider" {...settings}>
                        {universityList.map((uni, idx) => (
                            <div key={idx} className="outline-none py-4">
                                <div className="bg-white rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_12px_30px_rgb(249,115,22,0.12)] group overflow-hidden flex flex-col h-full">
                                    
                                    <div className="w-full h-48 relative overflow-hidden bg-gray-100">
                                        <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                                        <img
                                            src={uni.img}
                                            alt={uni.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                        />
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className="bg-white/90 backdrop-blur text-orange-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                                                {uni.country}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6 flex-1 flex flex-col justify-center">
                                        <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
                                            {uni.name}
                                        </h3>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </section>
    );
}

export default MbbsAbroad;