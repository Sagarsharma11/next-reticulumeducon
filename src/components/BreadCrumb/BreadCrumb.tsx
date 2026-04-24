import React from 'react';
import Link from 'next/link';

const BreadCrumb = ({ nav, title }: any) => {
  return (
    <div className="relative w-full pt-16 pb-20 overflow-hidden bg-slate-50 border-b border-gray-100 flex flex-col items-center justify-center">
        {/* Soft Modern Background Shapes */}
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-100"></div>
            <div className="absolute top-[-50%] left-[-10%] w-[60%] h-[150%] bg-orange-100/50 rounded-[100%] blur-3xl transform rotate-12"></div>
            <div className="absolute bottom-[-50%] right-[-10%] w-[50%] h-[120%] bg-blue-50/50 rounded-[100%] blur-3xl transform -rotate-12"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 w-full max-w-4xl max-h-min">
            <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 drop-shadow-sm tracking-tight">
                {title}
            </h1>
            
            <nav className="inline-flex items-center justify-center gap-3 bg-white/70 backdrop-blur-md px-6 py-2.5 rounded-full shadow-sm ring-1 ring-gray-900/5">
                <Link href="/" className="text-gray-500 hover:text-orange-600 transition-colors text-sm font-semibold tracking-widest uppercase flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                </Link>
                <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                <span className="text-orange-600 text-sm font-bold tracking-widest uppercase">
                    {title}
                </span>
            </nav>
        </div>
    </div>
  )
}

export default BreadCrumb;