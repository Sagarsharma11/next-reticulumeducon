import React from 'react';

const Section1 = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 shadow-orange-500/20 inline-block px-3 py-1 bg-orange-50 rounded-full">Our Vision</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
                    Shaping Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Medical Journey</span>
                </h2>
            </div>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 text-lg md:text-[19px] leading-relaxed text-gray-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <p className="mb-6 relative z-10">
                    <strong className="text-orange-600 font-extrabold">RETICULUM EDUCON</strong> is a leading platform for students who require reliable and authentic counseling for their future in the MEDICINE field. 
                    Mr. Naushad Alam is the founder and managing director of this company. Here we put forward all the possible and available options to you so that you are never short of options and you don't have to compromise with your dream.
                </p>
                <div className="relative z-10 bg-slate-50 border-l-4 border-orange-500 p-6 md:p-8 rounded-r-2xl my-8">
                    <p className="font-semibold text-gray-900 mb-4">Here in Reticulum, we empower students to:</p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">1</span>
                            <span><strong className="text-gray-900">Think</strong> about what they really want.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">2</span>
                            <span><strong className="text-gray-900">Dream</strong> about their perfect possible option.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">3</span>
                            <span><strong className="text-gray-900">Believe</strong> in us for being unerring with their career.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">4</span>
                            <span><strong className="text-gray-900">Dare</strong> to strive through this enduring path of being a DOCTOR.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section1;