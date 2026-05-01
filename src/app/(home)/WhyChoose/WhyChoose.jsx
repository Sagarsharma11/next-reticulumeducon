import React from 'react';

const WhyChoose = () => {
    const features = [
        {
            title: "World-Class Education",
            desc: "Study at internationally recognized universities known for advanced teaching methods, modern infrastructure, and well-equipped laboratories.",
            icon: "🏛️"
        },
        {
            title: "Affordable Fees",
            desc: "MBBS abroad is cost-effective and fits within budget compared to private medical colleges in India.",
            icon: "💰"
        },
        {
            title: "Extensive Clinical Exposure",
            desc: "Strong hospital affiliations provide hands-on clinical training and real-world experience.",
            icon: "🏥"
        },
        {
            title: "Global Recognition",
            desc: "Universities are approved by NMC/MCI, WHO, ECFMG, and USMLE, ensuring global career opportunities.",
            icon: "🌍"
        },
        {
            title: "English-Medium Programs",
            desc: "All courses are taught in English, ensuring smooth learning for Indian students.",
            icon: "📘"
        },
        {
            title: "Government Universities",
            desc: "All colleges and universities are government-recognized institutions in their respective countries.",
            icon: "🏫"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 shadow-orange-500/20 inline-block px-3 py-1 bg-orange-100 rounded-full">Our Core Values</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        Why Study <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600"> MBBS Abroad?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                        Discover the key features that make us the most trusted partner for your medical journey abroad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(249,115,22,0.1)] transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Testimonial callout */}
                <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 sm:p-10 text-center text-white shadow-[0_8px_30px_rgba(249,115,22,0.3)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-10 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 rounded-full bg-white opacity-10 blur-2xl"></div>

                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 relative z-10">We prioritize absolute transparency.</h3>
                    <p className="text-orange-100 max-w-3xl mx-auto text-lg mb-8 relative z-10">
                        We always prefer to share contact details of our ex-students and students currently studying in various countries, along with their parents' details. Speak directly with them to know the facts and reality on a first-hand basis!
                    </p>
                    <a href="/contact-us" className="inline-block px-8 py-3 bg-white text-orange-600 font-bold rounded-xl shadow-lg hover:bg-gray-50 transition-colors relative z-10">
                        Get in Touch Today
                    </a>
                </div>

            </div>
        </section>
    );
};

export default WhyChoose;