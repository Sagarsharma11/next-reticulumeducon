"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        name: "Sarfaraz",
        review: "Very good hospitality and service by this company. Always ready to help.",
        initials: "SA",
        img: "/assets/images/testimonials/sarfaraz.jpeg",
    },
    {
        name: "Ilma",
        review: "I had a great experience with Reticulum for our admissions process...",
        initials: "IL",
        img: "/assets/images/testimonials/ilma.jpeg",
    },
    {
        name: "Shahabuddin",
        review: "Reticulum Educon — most trusted consultancy for overseas medical education.",
        initials: "SH",
        img: "/assets/images/testimonials/shahabuddin.jpeg",
    },
    {
        name: "Adarsh Singh Rajput",
        review: "Reticulum consultancy provided excellent guidance...",
        initials: "AS",
        img: "/assets/images/testimonials/adarsh_singh_rajput.jpeg",
    },
    {
        name: "Allam Malak Akhtar",
        review: "The agency was helpful during the admission process...",
        initials: "AM",
        img: "/assets/images/testimonials/allam_malak_akhtar.jpeg",
    },
    {
        name: "Orooz Arfa Md. Nizamuddin",
        review: "Reticulum Educon has been a great support...",
        initials: "OA",
        img: "/assets/images/testimonials/nizamuddin.jpeg",
    },
    {
        name: "Intesaf Alam",
        review: "Very best consultant for Samarkand State Medical University...",
        initials: "IN",
        img: "/assets/images/testimonials/intesaf_alam.jpeg",
    },
    {
        name: "Mohd Saqib",
        review: "I had a great experience...",
        initials: "MS",
        img: "/assets/images/testimonials/mohd_saqib.jpeg",
    },
];

const Stars = () => (
    <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className="w-3.5 h-3.5 fill-orange-400 text-orange-400" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ))}
    </div>
);

const Avatar = ({ img, initials }: { img: string; initials: string }) => {
    if (img) {
        return (
            <img
                src={img}
                alt={initials}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-100 flex-shrink-0"
            />
        );
    }
    return (
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm ring-2 ring-orange-100">
            {initials}
        </div>
    );
};

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "20px",
                },
            },
        ],
    };

    return (
        <section className="py-16 md:py-24 bg-white relative border-t border-gray-100 overflow-hidden">

            <style jsx global>{`
                .testi-slider .slick-slide { padding: 0 12px; }
                .testi-slider .slick-dots { bottom: -40px; }
                .testi-slider .slick-dots li button:before {
                    font-size: 8px;
                    color: #f97316;
                    opacity: 0.3;
                }
                .testi-slider .slick-dots li.slick-active button:before {
                    color: #f97316;
                    opacity: 1;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm inline-block px-3 py-1 bg-orange-50 rounded-full">
                        Student Stories
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        What Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                            Students Say
                        </span>
                    </h2>
                    <p className="mt-3 text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
                        Real experiences from students and families who trusted Reticulum Educon for their MBBS journey abroad.
                    </p>
                </div>

                {/* Slider */}
                <div className="mx-[-12px] pb-14">
                    <Slider className="testi-slider" {...settings}>
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="outline-none py-4">
                                <div className="bg-white rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgb(249,115,22,0.12)] group overflow-hidden flex flex-col">

                                    {/* Student Image Banner */}
                                    <div className="w-full h-56 relative bg-orange-50 overflow-hidden">
                                        {t.img ? (
                                            <div className="flex justify-center pt-6">
                                                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-md">
                                                    <img
                                                        src={t.img}
                                                        alt={t.name}
                                                        className="w-full h-full object-cover object-top"
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            /* Placeholder when no image */
                                            <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-orange-50 to-orange-100">
                                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xl font-bold shadow-md">
                                                    {t.initials}
                                                </div>
                                                <span className="text-orange-300 text-xs font-medium tracking-wide uppercase">Student Photo</span>
                                            </div>
                                        )}

                                        {/* Orange accent bar at bottom of image */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 z-20" />
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-5 flex flex-col flex-1">

                                        {/* Stars + Quote row */}
                                        <div className="flex items-center justify-between mb-3">
                                            <Stars />
                                            <svg className="w-6 h-6 text-orange-200 group-hover:text-orange-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                            </svg>
                                        </div>

                                        {/* Review text */}
                                        <p className="text-gray-600 text-[13.5px] leading-relaxed flex-1 line-clamp-4">
                                            {t.review}
                                        </p>

                                        {/* Divider */}
                                        <div className="my-4 h-px bg-gradient-to-r from-orange-100 to-transparent" />

                                        {/* Author row */}
                                        <div className="flex items-center gap-3">
                                            <Avatar img={t.img} initials={t.initials} />
                                            <div>
                                                <p className="text-gray-900 text-sm font-bold leading-tight">{t.name}</p>
                                                <p className="text-orange-500 text-xs font-medium mt-0.5">Verified Student</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;