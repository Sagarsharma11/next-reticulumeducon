import React from 'react';

const Section3 = () => {
    const data = [
        {
            name: "Naushad Alam",
            title: "(Founder & M.D.)",
            message: "Message from the Chairman",
            image: "/assets/images/Naushad Alam1.jpeg",
            desc: "Dear Students and Parents,\n\nAt Reticulum Educon LLP, our mission is to empower students by providing them with access to world-class educational opportunities across the globe. We believe that education is the foundation for a successful future, and we are proud to guide aspiring individuals toward achieving their dreams through international education.\n\nOver the years, I have taken personal interest in the academic growth, safety, and overall well-being of every student who chooses our consultancy. Our strength lies in identifying the best universities abroad, especially for MBBS and other professional courses, ensuring not just quality education but also a safe and supportive environment.\n\nIt is through sincere commitment, relentless hard work, and genuine concern for our students that we have been able to send hundreds of students abroad to pursue their education. The trust that students and their families place in us is our greatest motivation and the reason we continue to grow and excel in what we do.\n\nAt Reticulum Educon, we are not just consultants — we are partners in your journey toward a brighter, global future. We are proud to be a part of your success stories and remain committed to shaping many more in the future.",
            foot: "Chairman, Reticulum Educon LLP"
        },
        {
            name: "Tanzil Ahmad",
            title: "(Director)",
            message: "Message from the Director",
            image: "/assets/images/tanjil ahmed1.jpeg",
            desc: "At Reticulum Educon LLP, my journey as a Director has always been centered around one core vision — to empower students in achieving their dream of studying MBBS abroad with confidence and clarity.\n\nFrom the very beginning, I have wholeheartedly dedicated my time and efforts to the growth and development of this organization. What truly drives me is the personal bond we build with each student — a relationship based on trust, understanding, and genuine care.\n\nThis close connection has helped countless students place their faith in us. By staying actively involved with students and their families, we have not only guided them toward the right opportunities but also supported them in overcoming every challenge along the way.\n\nAt Reticulum Educon, we do not simply send students abroad — we stand beside them throughout their entire journey. Your dreams inspire our mission, and your success continues to be our greatest achievement.",
            foot: "Director, Reticulum Educon LLP"
        },
        {
            name: "Mr. Shaban Ahmad",
            title: "(Legal Advisor)",
            message: "Message from the Legal Advisor",
            image: "/assets/images/Mr.shaban Ahmad .jpeg",
            desc: "At Reticulum Educon LLP, we understand that pursuing education abroad involves not only academic planning but also legal awareness, transparency, and trust. As the Legal Advisor of the organization, my role is to ensure that every process is handled with professionalism, integrity, and complete legal compliance.\n\nWith extensive experience in international commercial contract management, legal compliance, corporate litigation, contract drafting, policy development, insolvency and bankruptcy matters, I strive to strengthen the legal foundation of the organization and safeguard the interests of students and their families.\n\nOur commitment is to provide students with a secure and reliable pathway toward international education. Through proper guidance, transparent documentation, and ethical practices, we aim to build confidence and peace of mind for every student choosing Reticulum Educon LLP.\n\nI am proud to be associated with an organization that prioritizes student welfare, trust, and excellence in every aspect of its services.",
            foot: "Legal Advisor, Reticulum Educon LLP"
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