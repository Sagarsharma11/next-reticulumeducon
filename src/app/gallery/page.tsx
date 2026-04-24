"use client"
import React, { useState } from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const page = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const data = [
    "/assets/gallery/1.jpeg",
    "/assets/gallery/2.jpeg",
    "/assets/gallery/3.jpeg",
    "/assets/gallery/99.jpeg",
    "/assets/gallery/6.jpeg",
    "/assets/gallery/7.jpeg",
    "/assets/gallery/8.jpeg",
    "/assets/gallery/9.jpeg",
    "/assets/gallery/20.jpeg",
    "/assets/gallery/21.jpeg",
    "/assets/gallery/17.jpeg",
    "/assets/gallery/13.jpeg",
    "/assets/gallery/1.jpeg",
    "/assets/gallery/2.jpeg",
    "/assets/gallery/3.jpeg",
    "/assets/gallery/99.jpeg",
    "/assets/gallery/6.jpeg",
    "/assets/gallery/7.jpeg",
    "/assets/gallery/8.jpeg",
    "/assets/gallery/9.jpeg",
    "/assets/gallery/20.jpeg",
    "/assets/gallery/21.jpeg",
    "/assets/gallery/17.jpeg",
    "/assets/gallery/13.jpeg"
  ];
  
  return (
    <>
      <BreadCrumb nav="/gallery" title="Gallery" />
      
      <section className="py-16 md:py-24 bg-gray-50 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12">
                <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 shadow-orange-500/20 inline-block px-3 py-1 bg-orange-100 rounded-full">Moments</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Gallery</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                    Take a glimpse into the success stories, university campuses, and the journey of our students studying MBBS abroad.
                </p>
            </div>

            {/* Masonry Layout using CSS Columns */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
                {data.map((src, idx) => (
                    <div 
                        key={idx} 
                        className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer break-inside-avoid border border-gray-200 bg-white"
                        onClick={() => setSelectedImage(src)}
                    >
                        <img 
                            src={src} 
                            alt={`Gallery image ${idx + 1}`} 
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
            <button 
                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/30 rounded-full p-2 transition-all z-[60]"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
                <img 
                    src={selectedImage} 
                    alt="Expanded gallery image" 
                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl ring-1 ring-white/10"
                />
            </div>
        </div>
      )}
    </>
  )
}

export default page;