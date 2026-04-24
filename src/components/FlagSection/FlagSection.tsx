"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const FlagSection = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
        slidesToShow: 6,  
        slidesToScroll: 2, 
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1280, 
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const flagList = [
        { img: '/assets/images/russia.png', country: "Russia", slug: "russia" },
        { img: '/assets/images/belarus.png', country: "Belarus", slug: "belarus" },
        { img: '/assets/images/kazakistan.png', country: "Kazakhstan", slug: "kazakhstan" },
        { img: '/assets/images/philipens.png', country: "Philippines", slug: "philippines" },
        { img: '/assets/images/malysia.png', country: "Malaysia", slug: "malaysia" },
        { img: '/assets/images/nepal.jpg', country: "Nepal", slug: "nepal" },
        { img: '/assets/images/uzbakistan.jpg', country: "Uzbekistan", slug: "uzbekistan" },
        { img: '/assets/images/ukrain.png', country: "Ukraine", slug: "ukraine" },
        { img: '/assets/images/kirgistan.png', country: "Kyrgyzstan", slug: "kyrgyzstan" },
        { img: '/assets/images/georgia.jpg', country: "Georgia", slug: "georgia" },
        { img: '/assets/images/ajarbejain.jpg', country: "Azerbaijan", slug: "azerbaijan" }
    ];

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative border-b border-gray-100">
            <style jsx global>{`
                .flag-slider .slick-slide { padding: 0 10px; }
            `}</style>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 shadow-orange-500/20 inline-block px-3 py-1 bg-orange-50 rounded-full">Explore Destinations</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        Countries to Study <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">MBBS Abroad</span>
                    </h2>
                </div>
                
                <div className="mx-[-10px]">
                    <Slider className="flag-slider" {...settings}>
                        {flagList.map((ele, idx) => (
                            <div key={idx} className="outline-none py-4">
                                <Link href={`/mbbs/${ele.slug}`} className="block group">
                                    <div className="bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_12px_30px_rgb(249,115,22,0.15)] group-hover:border-orange-100 h-full flex flex-col items-center justify-center">
                                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 border-2 border-gray-50 group-hover:border-orange-100 p-1 transition-colors">
                                            <div className="w-full h-full rounded-full overflow-hidden relative">
                                                <img
                                                    src={ele.img}
                                                    alt={`Study MBBS in ${ele.country}`}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                                />
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-gray-800 text-center text-[15px] group-hover:text-orange-600 transition-colors">
                                            {ele.country}
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default FlagSection;