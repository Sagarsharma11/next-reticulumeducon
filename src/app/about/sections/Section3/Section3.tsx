import React from 'react';

const Section3 = () => {
    const data = [
        {
            name: "Naushad Alam",
            title: "(Founder & M.D.)",
            image: "/assets/images/Naushad Alam1.jpeg",
            desc: "He is the founder and managing director of Reticulum Educon LLP. He has relentlessly worked towards the educational upliftment of the student by searching for the best universities abroad.\n\nHe takes personal interest in the well-being and safety of each and every student that goes for education abroad through our company. It is because of his commitment, sincerity, hard work, and personal concern that we have been able to send so many students abroad for education, especially MBBS."
        },
        {
            name: "Tanzil Ahmad",
            title: "(Director)",
            image: "/assets/images/tanjil ahmed1.jpeg",
            desc: "He is the director of Reticulum Educon LLP. He has devoted his entire time to the development of the company. His personal connection and relationship with students have helped many students to trust and choose our company for studying MBBS abroad, and also helped us understand and resolve any problems faced by the students."
        },
        {
            name: "Mr. Shaban Ahmad",
            title: "(Legal Advisor)",
            image: "/assets/images/Mr.shaban Ahmad .jpeg",
            desc: "Mr. Shaban Ahmad has vast experience in the field of International commercial contract management, Legal compliance, commercial & corporate litigation, contract & policy drafting, insolvency & bankruptcy cases, and many more.\n\nHe directly deals with the legal department of Reticulum Educon LLP. Having Mr. Shaban Ahmad on board as a legal advisor is an astonishing achievement for our organization."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
            {/* Soft decorative background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 shadow-orange-500/20 inline-block px-3 py-1 bg-orange-100 rounded-full">Our Leadership</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Expert Team</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                        Driven by passion, guided by experience. Our team ensures that your transition to an international medical university is smooth and successful.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {data.map((ele, key) => (
                        <div key={key} className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col hover:shadow-[0_12px_40px_rgb(249,115,22,0.1)] transition-all duration-300 transform hover:-translate-y-2 group">
                            
                            <div className="flex flex-col items-center mb-6 border-b border-gray-100 pb-6">
                                <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg ring-4 ring-orange-50 mb-4 group-hover:ring-orange-100 transition-colors">
                                    <img src={ele.image} alt={ele.name} className="w-full h-full object-cover object-top filter hover:contrast-110 transition-all" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{ele.name}</h3>
                                <p className="text-orange-500 font-semibold text-sm mt-1">{ele.title}</p>
                            </div>
                            
                            <div className="flex-1 relative">
                                <span className="absolute -top-4 -left-2 text-6xl text-orange-50 font-serif leading-none select-none">"</span>
                                <div className="text-gray-600 leading-relaxed space-y-4 text-[15px] relative z-10 text-center sm:text-left">
                                    {ele.desc.split('\n\n').map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section3;