// 

"use client"
import React from "react";

const Service = () => {
    const services = [
        {
            title: "Personal Guidance",
            desc: "One-on-one interaction with students and parents for complete career clarity and university selection.",
        },
        {
            title: "Global Universities",
            desc: "Get access to top medical universities across Russia, Belarus, Kazakhstan, Georgia, Nepal and more.",
        },
        {
            title: "Visa & Documentation",
            desc: "Complete assistance with passport, visa stamping, admission letters, documentation and forex.",
        },
        {
            title: "Student Mentorship",
            desc: "Dedicated guardianship and continuous mentorship throughout the entire MBBS journey abroad.",
        },
        {
            title: "Affordable Education",
            desc: "Budget-friendly medical education opportunities without compromising quality and recognition.",
        },
        {
            title: "NMC & WHO Approved",
            desc: "Partnerships only with recognized and approved medical universities for safe career growth.",
        },
    ];

    return (
        <section className="relative bg-[#fffaf5] py-16 md:py-24 overflow-hidden cursor-pointer">

            <div className="absolute top-[-120px] right-[-120px] w-[300px] h-[300px] bg-orange-200/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-120px] left-[-120px] w-[300px] h-[300px] bg-orange-100/50 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-12">
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 shadow-orange-500/20 inline-block px-3 py-1 bg-orange-50 rounded-full">
                        Our Services
                    </span>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 leading-tight">
                        Complete Support For Your{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                            MBBS Abroad Journey
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
                        From counseling to graduation, Reticulum Educon provides
                        end-to-end support to make your medical education journey
                        smooth, secure and successful.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-[28px] border border-orange-100 p-7 md:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(249,115,22,0.15)]"
                        >

                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">

                                <div className="w-16 h-16 rounded-2xl bg-orange-100 group-hover:bg-white/20 flex items-center justify-center transition-all duration-500">
                                    <span className="text-2xl font-bold text-orange-600 group-hover:text-white">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-500">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base group-hover:text-orange-50 transition-colors duration-500">
                                    {item.desc}
                                </p>

                                {/* <div className="mt-6 flex items-center gap-2 text-orange-600 group-hover:text-white font-semibold transition-colors duration-500">
                                    <span>Learn More</span>

                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:mt-20">
                    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 p-8 md:p-12 shadow-[0_25px_80px_rgba(249,115,22,0.25)]">

                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 text-center">
                            <h3 className="text-3xl md:text-4xl font-black text-white">
                                RETICULUM EDUCON LLP
                            </h3>

                            <p className="mt-5 max-w-3xl mx-auto text-orange-50 text-base md:text-lg leading-relaxed">
                                Your trusted partner for MBBS abroad admissions,
                                transparent counseling, university selection,
                                visa assistance and complete mentorship support.
                            </p>

                            <button
                                onClick={() => {
                                    document
                                        .getElementById("universities")
                                        ?.scrollIntoView();
                                }}
                                className="mt-8 bg-white text-orange-600 hover:bg-orange-50 transition-all duration-300 px-7 py-3 rounded-full font-bold shadow-lg"
                            >
                                Explore Universities
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;