import React from "react";
import {
    HiOutlineCog,
    HiOutlineUsers,
    HiOutlineBuildingLibrary,
    HiOutlineAcademicCap,
    HiOutlineShieldCheck,
    HiOutlineHandThumbUp
} from "react-icons/hi2";

const Section4 = () => {
    const points = [
        {
            title: "Comprehensive Guidance",
            desc: "We provide every possible opportunity and pathway so students never have to compromise on their dream of becoming a doctor.",
            icon: <HiOutlineCog className="w-6 h-6 text-white" />,
        },
        {
            title: "Student-Centric Support",
            desc: "We understand every student’s goals personally and guide them with clarity, trust, and complete transparency.",
            icon: <HiOutlineUsers className="w-6 h-6 text-white" />,
        },
        {
            title: "Direct University Access",
            desc: "Our direct partnerships with reputed universities simplify admissions and ensure a smooth process for students.",
            icon: <HiOutlineBuildingLibrary className="w-6 h-6 text-white" />,
        },
        {
            title: "End-to-End Mentorship",
            desc: "From admission to graduation, we continuously support students throughout their entire educational journey.",
            icon: <HiOutlineAcademicCap className="w-6 h-6 text-white" />,
        },
        {
            title: "Trusted & Transparent",
            desc: "Authentic counseling, honest guidance, and reliable support make us one of the most dependable consultancies.",
            icon: <HiOutlineShieldCheck className="w-6 h-6 text-white" />,
        },
        {
            title: "High Parent Satisfaction",
            desc: "Students and parents trust us because of our commitment, personalized mentorship, and successful track record.",
            icon: <HiOutlineHandThumbUp className="w-6 h-6 text-white" />,
        },
    ];

    return (
        <section className="relative py-20 md:py-28 bg-[#fffaf5] overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50 -translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30 translate-x-1/4 translate-y-1/4"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs sm:text-sm font-bold tracking-wider uppercase">
                        Why Choose Us
                    </span>

                    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">
                        Why Students Trust{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                            Reticulum Educon
                        </span>
                    </h2>

                    <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Reticulum Educon is a trusted educational consultancy helping
                        aspiring medical students achieve their dream of studying MBBS
                        abroad through transparent guidance and dedicated mentorship.
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {points.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl border border-orange-100/70 p-6 md:p-8 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(249,115,22,0.06)] hover:border-orange-200/80 transition-all duration-300 flex flex-col justify-between"
                        >
                            {/* Accent Blob */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-orange-50/50 rounded-bl-full transition-colors group-hover:bg-orange-100/50"></div>

                            <div>
                                {/* Header Block Inside Card */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md shadow-orange-500/20 transform group-hover:scale-105 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <span className="text-2xl font-black text-orange-100 select-none group-hover:text-orange-200 transition-colors">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Banner Section */}
                <div className="mt-16 md:mt-24">
                    <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 overflow-hidden shadow-xl shadow-orange-600/10">
                        {/* Interactive Design Shape inside CTA */}
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="absolute -left-10 -top-10 w-40 h-40 bg-black/10 rounded-full blur-2xl"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
                            <div className="text-center md:text-left max-w-2xl">
                                <h3 className="text-2xl md:text-3xl font-black text-white tracking-wide uppercase">
                                    Reticulum Educon
                                </h3>
                                <p className="mt-3 text-orange-50 text-sm sm:text-base md:text-lg leading-relaxed">
                                    Guiding students toward a brighter and successful future in
                                    medicine with trusted mentorship and global educational
                                    opportunities.
                                </p>
                            </div>
                            <div className="flex-shrink-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 text-center text-white font-medium text-sm tracking-wide">
                                Your Trusted Career Partner
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;