import React from 'react';

const Section3 = () => {
    const data = [
        {
            name: "Naushad Alam",
            title: "(Founder & M.D.)",
            message: "Message from the Chairman",
            image: "/assets/images/Naushad Alam1.jpeg",
            desc: "Dear students and Parents,\n\nAt Reticulum Educon LLP, our mission is to empower students by providing them with access to world-class educational opportunities across the globe. We believe that education is the foundation for a successful future, and we are proud to guide aspiring individuals toward achieving their dreams through international education.\n\nOver the years, I have taken personal interest in the academic growth, safety, and overall well-being of every student who chooses our consultancy. Our strength lies in identifying the best universities abroad, especially for MBBS and other professional courses, ensuring not just quality education but also a safe and supportive environment.\n\nIt is through sincere commitment, relentless hard work, and genuine concern for our students that we have been able to send hundreds of students abroad to pursue their education. The trust that students and their families place in us is our greatest motivation and the reason we continue to grow and excel in what we do.\n\nAt Reticulum Educon, we are not just consultants—we are partners in your journey toward a brighter, global future.\nWe are proud to be a part of your success stories and we remain committed to shaping many more in the future.",
            foot: "Chairman, Reticulum Educon LLP"
        },
        {
            name: "Tanzil Ahmad",
            title: "(Director)",
            message: "Message from the Director",
            image: "/assets/images/tanjil ahmed1.jpeg",
            desc: "At Reticulum Educon LLP, as a director my journey has always been centered around one core vision — to empower students in achieving their dream of studying MBBS abroad with confidence and clarity.\n\nFrom the very beginning, I have wholeheartedly dedicated my time and efforts to the growth of this organization. What truly drives me is the personal bond we build with each student — a connection based on trust, understanding, and genuine care.\n\nIt is this relationship that has helped countless students place their faith in us. By staying closely connected with them, we've not only guided them towards the right opportunities but have also stood by them in resolving challenges, both big and small.\n\nAt Reticulum Educon, we don't just send students abroad — we walk every step of the journey with them. Your dreams are our mission, and your success is our greatest reward.",
            foot: "Director, Reticulum Educon LLP"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-orange-50/50 blur-3xl"></div>
                <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-orange-50/50 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 shadow-orange-500/20 inline-block px-3 py-1 bg-orange-50 rounded-full">Leadership</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        Words from our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Founders</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {data.map((ele, key) => (
                        <div key={key} className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
                            
                            {/* Header: Image & Title */}
                            <div className="flex items-center gap-6 mb-8 border-b border-gray-100 pb-8">
                                <div className="w-24 h-24 rounded-full overflow-hidden shadow-md ring-4 ring-orange-50 flex-shrink-0">
                                    <img src={ele.image} alt={ele.name} className="w-full h-full object-cover object-top" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{ele.name}</h3>
                                    <p className="text-orange-500 font-semibold text-sm mb-1">{ele.title}</p>
                                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium mt-1">
                                        {ele.message}
                                    </span>
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 relative">
                                <span className="absolute -top-4 -left-4 text-6xl text-orange-100 font-serif leading-none opacity-50 select-none">"</span>
                                <div className="text-gray-600 leading-relaxed space-y-4 text-[15px] relative z-10">
                                    {ele.desc.split('\n\n').map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="mt-8 pt-6 border-t border-gray-50 text-right">
                                <p className="text-gray-500 text-sm">Warm regards,</p>
                                <p className="font-bold text-gray-900">{ele.name}</p>
                                <p className="text-xs text-orange-500 mt-0.5">{ele.foot}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section3;