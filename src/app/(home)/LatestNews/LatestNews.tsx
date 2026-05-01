import React from 'react';

const LatestNews = () => {
    const ytData = [
        "https://www.youtube.com/embed/rZVMgA1t24w",
        "https://www.youtube.com/embed/z94mNxRXhhM",
        "https://www.youtube.com/embed/3vp36Ah2mdI",
        "https://www.youtube.com/embed/TQFChXDxtNk",
        "https://www.youtube.com/embed/jNtR5qjKkSU"
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 shadow-orange-500/20 inline-block px-3 py-1 bg-orange-100 rounded-full">Media & Updates</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">News & Videos</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {ytData.map((ele, idx) => (
                        <div key={idx} className={`bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-200 transition-transform duration-300 hover:-translate-y-1 ${idx === 0 ? 'md:col-span-2 lg:col-span-2 aspect-video' : 'aspect-video'}`}>
                            <iframe
                                className="w-full h-full"
                                src={ele}
                                title={`YouTube video player ${idx + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LatestNews;