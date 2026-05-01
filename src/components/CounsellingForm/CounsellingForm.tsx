// const CounsellingForm = ({ formData, handleChange, sendToWhatsApp }: any) => {
//     return (
//         <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_rgb(0,0,0,0.06)] border border-gray-100">
//             <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>

//             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-2">
//                         <label className="text-sm font-semibold text-gray-700">First Name <span className="text-red-500">*</span></label>
//                         <input
//                             type="text"
//                             name="firstName"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             placeholder="John"
//                             required
//                             className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium"
//                         />
//                     </div>
//                     <div className="space-y-2">
//                         <label className="text-sm font-semibold text-gray-700">Last Name</label>
//                         <input
//                             type="text"
//                             name="lastName"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             placeholder="Doe"
//                             className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium"
//                         />
//                     </div>
//                 </div>

//                 <div className="space-y-2">
//                     <label className="text-sm font-semibold text-gray-700">Email Address</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="john@example.com"
//                         className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium"
//                     />
//                 </div>

//                 <div className="space-y-2">
//                     <label className="text-sm font-semibold text-gray-700">Phone Number <span className="text-red-500">*</span></label>
//                     <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="+91 98765 43210"
//                         required
//                         className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium"
//                     />
//                 </div>

//                 <div className="space-y-2">
//                     <label className="text-sm font-semibold text-gray-700">Your Query <span className="text-red-500">*</span></label>
//                     <textarea
//                         name="query"
//                         value={formData.query}
//                         onChange={handleChange}
//                         rows={5}
//                         required
//                         placeholder="How can we help you?"
//                         className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium resize-none"
//                     ></textarea>
//                 </div>

//                 <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <button
//                         type="button"
//                         onClick={() => sendToWhatsApp("8862851969", formData)}
//                         className="w-full flex items-center justify-center gap-2 bg-white border-2 border-green-500 hover:bg-green-50 transition-all text-green-600 font-bold py-4 rounded-xl text-[15px]"
//                     >
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12a9.8 9.8 0 0 0 1.4 5.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm4.3 13.6c-.3.9-1.5 1.6-2.6 1.6-.6 0-1.4-.2-2.2-.6-1.1-.6-2.2-1.8-3-3.1-.7-1.2-1-2.2-.9-3 .2-1.1.9-2.3 1.8-2.5h.6c.2 0 .5.6.7 1.3.1.7.3 1.3.2 1.5-.1.3-.2.3-.4.6-.2.2-.3.3-.5.5-.2.2-.4.4-.2.7.1.3.5.8.8 1.2.5.6 1.1 1.1 1.8 1.4.2.1.4.1.6-.1.2-.2.8-.9 1-.9s.5 0 .8.2c.3.1 1 .4 1.1.5.2.1.3.2.4.3 0 .3 0 .7-.1 1z" /></svg>
//                         Send to 88628-51969
//                     </button>

//                     <button
//                         type="button"
//                         onClick={() => sendToWhatsApp("7667962400", formData)}
//                         className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 active:scale-[0.98] transition-all text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/30 text-[15px]"
//                     >
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12a9.8 9.8 0 0 0 1.4 5.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm4.3 13.6c-.3.9-1.5 1.6-2.6 1.6-.6 0-1.4-.2-2.2-.6-1.1-.6-2.2-1.8-3-3.1-.7-1.2-1-2.2-.9-3 .2-1.1.9-2.3 1.8-2.5h.6c.2 0 .5.6.7 1.3.1.7.3 1.3.2 1.5-.1.3-.2.3-.4.6-.2.2-.3.3-.5.5-.2.2-.4.4-.2.7.1.3.5.8.8 1.2.5.6 1.1 1.1 1.8 1.4.2.1.4.1.6-.1.2-.2.8-.9 1-.9s.5 0 .8.2c.3.1 1 .4 1.1.5.2.1.3.2.4.3 0 .3 0 .7-.1 1z" /></svg>
//                         Send to 76679-62400
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default CounsellingForm;


const CounsellingForm = ({ formData, handleChange, sendToWhatsApp }: any) => {
    return (
        <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-12 shadow-[0_20px_60px_rgb(0,0,0,0.06)] border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 sm:mb-8">Send us a Message</h3>

            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700">
                            First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="John"
                            required
                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium text-sm sm:text-base"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Doe"
                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium text-sm sm:text-base"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium text-sm sm:text-base"
                    />
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">
                        Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium text-sm sm:text-base"
                    />
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">
                        Your Query <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="query"
                        value={formData.query}
                        onChange={handleChange}
                        rows={4}
                        required
                        placeholder="How can we help you?"
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium resize-none text-sm sm:text-base"
                    />
                </div>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                        type="button"
                        onClick={() => sendToWhatsApp("8862851969", formData)}
                        className="w-full flex items-center justify-center gap-2 bg-white border-2 border-green-500 hover:bg-green-50 transition-all text-green-600 font-bold py-3 sm:py-4 rounded-xl text-sm sm:text-[15px]"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2A10 10 0 0 0 2 12a9.8 9.8 0 0 0 1.4 5.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm4.3 13.6c-.3.9-1.5 1.6-2.6 1.6-.6 0-1.4-.2-2.2-.6-1.1-.6-2.2-1.8-3-3.1-.7-1.2-1-2.2-.9-3 .2-1.1.9-2.3 1.8-2.5h.6c.2 0 .5.6.7 1.3.1.7.3 1.3.2 1.5-.1.3-.2.3-.4.6-.2.2-.3.3-.5.5-.2.2-.4.4-.2.7.1.3.5.8.8 1.2.5.6 1.1 1.1 1.8 1.4.2.1.4.1.6-.1.2-.2.8-.9 1-.9s.5 0 .8.2c.3.1 1 .4 1.1.5.2.1.3.2.4.3 0 .3 0 .7-.1 1z" />
                        </svg>
                        Send to 88628-51969
                    </button>

                    <button
                        type="button"
                        onClick={() => sendToWhatsApp("7667962400", formData)}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 active:scale-[0.98] transition-all text-white font-bold py-3 sm:py-4 rounded-xl shadow-lg shadow-green-500/30 text-sm sm:text-[15px]"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2A10 10 0 0 0 2 12a9.8 9.8 0 0 0 1.4 5.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm4.3 13.6c-.3.9-1.5 1.6-2.6 1.6-.6 0-1.4-.2-2.2-.6-1.1-.6-2.2-1.8-3-3.1-.7-1.2-1-2.2-.9-3 .2-1.1.9-2.3 1.8-2.5h.6c.2 0 .5.6.7 1.3.1.7.3 1.3.2 1.5-.1.3-.2.3-.4.6-.2.2-.3.3-.5.5-.2.2-.4.4-.2.7.1.3.5.8.8 1.2.5.6 1.1 1.1 1.8 1.4.2.1.4.1.6-.1.2-.2.8-.9 1-.9s.5 0 .8.2c.3.1 1 .4 1.1.5.2.1.3.2.4.3 0 .3 0 .7-.1 1z" />
                        </svg>
                        Send to 76679-62400
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CounsellingForm;