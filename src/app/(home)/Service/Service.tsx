import React from 'react';

const Service = () => {
    const points = [
        "One-on-one interaction with students and their guardians.",
        "Unmatched exposure to top-notch Universities in countries like Russia, Belarus, Kazakhstan, Philippines, Malaysia, Nepal, Uzbekistan, Ukraine, Kyrgyzstan, Georgia, and Azerbaijan.",
        "Complete processing of Passport, Visa Stamping, Documentation, and Foreign Exchange.",
        "Dedicated local guardianship & mentorship throughout the entire education journey.",
        "Cost-effective and budget-friendly educational opportunities contrary to popular belief.",
        "Exclusive partnerships only with NMC and WHO-approved medical colleges and universities."
    ];

    return (
        <section className="py-16 md:py-24 bg-white relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">We Provide</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                        Comprehensive end-to-end support to ensure a seamless transition into your medical career abroad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {points.map((ele, key) => (
                        <div key={key} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-[0_2px_15px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-orange-200 hover:shadow-[0_8px_25px_rgb(249,115,22,0.08)] transition-all">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                {ele}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Service;