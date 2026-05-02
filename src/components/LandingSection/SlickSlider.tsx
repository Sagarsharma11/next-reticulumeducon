"use client"
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CounsellingModal from "../Modal/CounsellingModal";
import Image from 'next/image'


export default function SimpleSlider() {
    const [open, setOpen] = useState(false);
    var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        arrows: false,
    };

    const slideData = [
        {
            img: "/assets/images/slider/slide1.jpeg",
            title: "Your Trusted Partner for MBBS Abroad",
            subtitle: "Guiding Excellence Beyond Borders",
            text: "Helping students and families achieve their dream of studying MBBS abroad with expert guidance, transparency, and genuine care."
        },
        {
            img: "/assets/images/slider/slide2.jpg",
            title: "Study MBBS in Top Universities",
            subtitle: "NMC & WHO Approved",
            text: "Unlock global opportunities with affordable, world-class medical education in prestigious institutions."
        },
        {
            img: "/assets/images/slider/slide3.jpg",
            title: "Begin Your Medical Journey Today",
            subtitle: "Free Counseling Available",
            text: "Take the first step towards a glorious medical career. Connect with our expert advisors now."
        }
    ];

    return (
        <>

            <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden group bg-slate-900">
                <style jsx global>{`
                .hero-slider .slick-list,
                .hero-slider .slick-track,
                .hero-slider .slick-slide > div {
                    height: 100%;
                }
                .hero-slider .slick-dots {
                    bottom: 25px;
                }
                .hero-slider .slick-dots li button:before {
                    font-size: 14px;
                    color: rgba(255,255,255,0.5);
                    opacity: 1;
                }
                .hero-slider .slick-dots li.slick-active button:before {
                    color: #f97316;
                }
            `}</style>
                <CounsellingModal open={open} setOpen={setOpen} />
                <Slider className="hero-slider w-full h-full" {...settings}>
                    {slideData.map((slide, index) => (
                        <div key={index} className="relative w-full h-full outline-none">
                            <div className="absolute inset-0 w-full h-full">
                                <Image src={slide.img} alt={slide.title} fill
                                    priority className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>

                            <div className="relative h-full flex flex-col justify-center px-6 md:px-16 lg:px-24">
                                <div className="max-w-3xl space-y-5 md:space-y-6 pt-12 md:pt-0">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 font-bold text-xs md:text-sm tracking-widest uppercase">
                                        {slide.subtitle}
                                    </span>
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] drop-shadow-2xl">
                                        {slide.title}
                                    </h1>
                                    <p className="text-base md:text-xl text-gray-200 max-w-2xl drop-shadow-md pb-4 font-medium leading-relaxed">
                                        {slide.text}
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <p
                                            onClick={() => setOpen(true)}
                                            className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 transform hover:-translate-y-1 hover:scale-[1.05] transition-all duration-300 animate-cta"
                                        >
                                            Get Free Counseling
                                        </p>
                                        <a href="/about" className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-xl backdrop-blur-md transition-all transform hover:-translate-y-1">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}