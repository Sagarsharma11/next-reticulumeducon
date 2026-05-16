"use client"
import React from "react";

const AdmissionProcedure = () => {
    const steps = [
        {
            step: "01",
            title: "Initial Document Submission",
            desc: "Submit scanned copies of 10th & 12th Mark Sheets, NEET Scorecard, Passport, and passport-size photograph via email. Our counselor will verify and confirm receipt.",
        },
        {
            step: "02",
            title: "Registration Payment",
            desc: "Pay the registration fee online or via bank transfer to the company account and share the receipt with your counselor.",
        },
        {
            step: "03",
            title: "Admission Confirmation",
            desc: "We process your university application and provide the official admission letter once issued.",
        },
        {
            step: "04",
            title: "Original Document Submission",
            desc: "Send your original documents by courier or personally submit them at the Reticulum Educon office.",
        },
        {
            step: "05",
            title: "Documentation Fee",
            desc: "Pay the documentation fee through online transfer or bank deposit. Your counselor will confirm the payment.",
        },
        {
            step: "06",
            title: "Invitation Letter",
            desc: "After document verification, we process your official invitation letter and share it once approved.",
        },
        {
            step: "07",
            title: "Visa Application",
            desc: "Pay the visa processing fee and share the receipt. We apply for your visa and notify you upon approval.",
        },
        {
            step: "08",
            title: "Travel Arrangements",
            desc: "We guide students with flight booking, luggage preparation, hostel settlement, city orientation, and complete admission formalities abroad.",
        },
        {
            step: "09",
            title: "Service Charges",
            desc: "Pay the final service charges before departure and receive payment confirmation from your counselor.",
        },
        {
            step: "10",
            title: "Document Collection",
            desc: "Collect your passport and academic documents either from our office or directly at the airport before departure.",
        },
    ];

    return (
        <section className="relative py-16 md:py-24 bg-[#fffaf5] overflow-hidden">

            <div className="absolute top-0 left-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-12">
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 shadow-orange-500/20 inline-block px-3 py-1 bg-orange-50 rounded-full">
                        Admission Procedure
                    </span>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 leading-tight">
                        Your Gateway To{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                            Global Medical Education
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
                        Complete admission support from counseling to your safe arrival abroad.
                    </p>
                </div>

                <div className="relative">

                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-300 via-orange-500 to-orange-300 transform -translate-x-1/2 rounded-full"></div>

                    <div className="space-y-8 md:space-y-12">
                        {steps.map((item, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0
                                    ? "md:justify-start"
                                    : "md:justify-end"
                                    }`}
                            >

                                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white items-center justify-center font-black text-lg shadow-xl z-20">
                                    {item.step}
                                </div>

                                <div
                                    className={`w-full md:w-[46%] bg-white border border-orange-100 rounded-[28px] p-6 md:p-8 shadow-[0_10px_40px_rgba(249,115,22,0.08)] hover:shadow-[0_15px_50px_rgba(249,115,22,0.15)] transition-all duration-300`}
                                >

                                    <div className="flex items-center gap-4 mb-5 md:hidden">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold shadow-lg">
                                            {item.step}
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <div className="hidden md:block">
                                        <span className="text-orange-500 font-bold text-sm tracking-wider">
                                            STEP {item.step}
                                        </span>

                                        <h3 className="mt-2 text-2xl font-bold text-gray-900">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20">
                    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 p-8 md:p-12 text-center shadow-[0_25px_80px_rgba(249,115,22,0.25)]">

                        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-black text-white">
                                We’re With You All The Way!
                            </h3>

                            <p className="mt-5 max-w-3xl mx-auto text-orange-50 text-base md:text-lg leading-relaxed">
                                From your first counseling session to your safe
                                arrival abroad, Reticulum Educon stays beside you
                                at every stage of your medical education journey.
                            </p>

                            <button
                                onClick={() => {
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView();
                                }}
                                className="mt-8 bg-white text-orange-600 hover:bg-orange-50 transition-all duration-300 px-7 py-3 rounded-full font-bold shadow-lg"
                            >
                                Start Your Journey
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionProcedure;