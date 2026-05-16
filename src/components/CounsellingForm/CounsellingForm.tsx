// const inputClass = "w-full bg-gray-50 border border-gray-200 text-gray-900 px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium text-sm sm:text-base";

// const countries = ["Russia", "Kazakhstan", "Georgia", "Uzbekistan", "Bangladesh", "Belarus", "Kyrgyzstan", "Nepal"];

// const universities: Record<string, string[]> = {
//     Russia: ["Kazan Federal University", "Crimea Federal University", "Bashkir State Medical University", "Kursk State Medical University"],
//     Kazakhstan: ["Kazakh National Medical University", "Astana Medical University", "South Kazakhstan Medical Academy"],
//     Georgia: ["Tbilisi State Medical University", "New Vision University", "David Tvildiani Medical University"],
//     Uzbekistan: ["Tashkent Medical Academy", "Samarkand State Medical University", "Andijan State Medical Institute"],
//     Bangladesh: ["Dhaka National Medical College", "Sir Salimullah Medical College", "Shaheed Suhrawardy Medical College"],
//     Belarus: ["Grodno State Medical University", "Vitebsk State Medical University", "Gomel State Medical University"],
//     Kyrgyzstan: ["Kyrgyz State Medical Academy", "International School of Medicine", "Osh State University"],
//     Nepal: ["Kathmandu University", "BP Koirala Institute of Health Sciences", "Manipal College of Medical Sciences"],
// };

// const CounsellingForm = ({ formData, handleChange, sendToWhatsApp }: any) => {
//     const availableUniversities = universities[formData.country] || [];

//     return (
//         <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-12 shadow-[0_20px_60px_rgb(0,0,0,0.06)] border border-gray-100">
//             <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 sm:mb-8">Send us a Message</h3>

//             <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>

//                 {/* Name */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div className="space-y-1.5">
//                         <label className="text-sm font-semibold text-gray-700">
//                             First Name <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                             type="text"
//                             name="firstName"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             placeholder="Rahul"
//                             required
//                             className={inputClass}
//                         />
//                     </div>
//                     <div className="space-y-1.5">
//                         <label className="text-sm font-semibold text-gray-700">Last Name</label>
//                         <input
//                             type="text"
//                             name="lastName"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             placeholder="Kumar"
//                             className={inputClass}
//                         />
//                     </div>
//                 </div>

//                 {/* Mobile */}
//                 <div className="space-y-1.5">
//                     <label className="text-sm font-semibold text-gray-700">
//                         Mobile Number <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="+91 98765 43210"
//                         required
//                         className={inputClass}
//                     />
//                 </div>

//                 {/* Email */}
//                 <div className="space-y-1.5">
//                     <label className="text-sm font-semibold text-gray-700">Email Address</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="rahul@example.com"
//                         className={inputClass}
//                     />
//                 </div>

//                 {/* NEET Score + 12th Percent */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div className="space-y-1.5">
//                         <label className="text-sm font-semibold text-gray-700">
//                             NEET Score <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                             type="number"
//                             name="neetScore"
//                             value={formData.neetScore}
//                             onChange={handleChange}
//                             placeholder="e.g. 450"
//                             required
//                             min={0}
//                             max={720}
//                             className={inputClass}
//                         />
//                     </div>
//                     <div className="space-y-1.5">
//                         <label className="text-sm font-semibold text-gray-700">
//                             12th Percentage <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                             type="number"
//                             name="twelfthPercent"
//                             value={formData.twelfthPercent}
//                             onChange={handleChange}
//                             placeholder="e.g. 75"
//                             required
//                             min={0}
//                             max={100}
//                             className={inputClass}
//                         />
//                     </div>
//                 </div>

//                 {/* Country */}
//                 <div className="space-y-1.5">
//                     <label className="text-sm font-semibold text-gray-700">Preferred Country</label>
//                     <select
//                         name="country"
//                         value={formData.country}
//                         onChange={handleChange}
//                         className={inputClass}
//                     >
//                         <option value="">-- Select Country --</option>
//                         {countries.map((c) => (
//                             <option key={c} value={c}>{c}</option>
//                         ))}
//                     </select>
//                 </div>

//                 {/* University */}
//                 <div className="space-y-1.5">
//                     <label className="text-sm font-semibold text-gray-700">Preferred University</label>
//                     <select
//                         name="university"
//                         value={formData.university}
//                         onChange={handleChange}
//                         disabled={!formData.country}
//                         className={`${inputClass} ${!formData.country ? "opacity-50 cursor-not-allowed" : ""}`}
//                     >
//                         <option value="">-- Select University --</option>
//                         {availableUniversities.map((u) => (
//                             <option key={u} value={u}>{u}</option>
//                         ))}
//                     </select>
//                     {!formData.country && (
//                         <p className="text-xs text-gray-400 mt-1">Please select a country first</p>
//                     )}
//                 </div>

//                 {/* Query */}
//                 <div className="space-y-1.5">
//                     <label className="text-sm font-semibold text-gray-700">
//                         Your Query <span className="text-red-500">*</span>
//                     </label>
//                     <textarea
//                         name="query"
//                         value={formData.query}
//                         onChange={handleChange}
//                         rows={4}
//                         required
//                         placeholder="How can we help you?"
//                         className={`${inputClass} resize-none`}
//                     />
//                 </div>

//                 {/* Buttons */}
//                 <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     <button
//                         type="button"
//                         onClick={() => sendToWhatsApp("8862851969", formData)}
//                         className="w-full flex items-center justify-center gap-2 bg-white border-2 border-green-500 hover:bg-green-50 transition-all text-green-600 font-bold py-3 sm:py-4 rounded-xl text-sm sm:text-[15px]"
//                     >
//                         <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                             <path d="M12 2A10 10 0 0 0 2 12a9.8 9.8 0 0 0 1.4 5.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm4.3 13.6c-.3.9-1.5 1.6-2.6 1.6-.6 0-1.4-.2-2.2-.6-1.1-.6-2.2-1.8-3-3.1-.7-1.2-1-2.2-.9-3 .2-1.1.9-2.3 1.8-2.5h.6c.2 0 .5.6.7 1.3.1.7.3 1.3.2 1.5-.1.3-.2.3-.4.6-.2.2-.3.3-.5.5-.2.2-.4.4-.2.7.1.3.5.8.8 1.2.5.6 1.1 1.1 1.8 1.4.2.1.4.1.6-.1.2-.2.8-.9 1-.9s.5 0 .8.2c.3.1 1 .4 1.1.5.2.1.3.2.4.3 0 .3 0 .7-.1 1z" />
//                         </svg>
//                         Send to 88628-51969
//                     </button>

//                     <button
//                         type="button"
//                         onClick={() => sendToWhatsApp("7667962400", formData)}
//                         className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 active:scale-[0.98] transition-all text-white font-bold py-3 sm:py-4 rounded-xl shadow-lg shadow-green-500/30 text-sm sm:text-[15px]"
//                     >
//                         <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                             <path d="M12 2A10 10 0 0 0 2 12a9.8 9.8 0 0 0 1.4 5.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm4.3 13.6c-.3.9-1.5 1.6-2.6 1.6-.6 0-1.4-.2-2.2-.6-1.1-.6-2.2-1.8-3-3.1-.7-1.2-1-2.2-.9-3 .2-1.1.9-2.3 1.8-2.5h.6c.2 0 .5.6.7 1.3.1.7.3 1.3.2 1.5-.1.3-.2.3-.4.6-.2.2-.3.3-.5.5-.2.2-.4.4-.2.7.1.3.5.8.8 1.2.5.6 1.1 1.1 1.8 1.4.2.1.4.1.6-.1.2-.2.8-.9 1-.9s.5 0 .8.2c.3.1 1 .4 1.1.5.2.1.3.2.4.3 0 .3 0 .7-.1 1z" />
//                         </svg>
//                         Send to 76679-62400
//                     </button>
//                 </div>

//             </form>
//         </div>
//     );
// };

// export default CounsellingForm;


const inputClass = "w-full bg-gray-50 border border-gray-200 text-gray-900 px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium text-sm";

const countries = ["Russia", "Kazakhstan", "Georgia", "Uzbekistan", "Bangladesh", "Belarus", "Kyrgyzstan", "Nepal"];

const universities: Record<string, string[]> = {
    Russia: ["Kazan Federal University", "Crimea Federal University", "Bashkir State Medical University", "Kursk State Medical University"],
    Kazakhstan: ["Kazakh National Medical University", "Astana Medical University", "South Kazakhstan Medical Academy"],
    Georgia: ["Tbilisi State Medical University", "New Vision University", "David Tvildiani Medical University"],
    Uzbekistan: ["Tashkent Medical Academy", "Samarkand State Medical University", "Andijan State Medical Institute"],
    Bangladesh: ["Dhaka National Medical College", "Sir Salimullah Medical College", "Shaheed Suhrawardy Medical College"],
    Belarus: ["Grodno State Medical University", "Vitebsk State Medical University", "Gomel State Medical University"],
    Kyrgyzstan: ["Kyrgyz State Medical Academy", "International School of Medicine", "Osh State University"],
    Nepal: ["Kathmandu University", "BP Koirala Institute of Health Sciences", "Manipal College of Medical Sciences"],
};

const CounsellingForm = ({ formData, handleChange, sendToWhatsApp }: any) => {
    const availableUniversities = universities[formData.country] || [];

    return (
        <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col max-h-[90vh] mt-[4rem]">

            {/* Fixed Header */}
            <div className="px-5 pt-5 pb-3 border-b border-gray-100 flex-shrink-0">
                <h3 className="text-lg font-bold text-gray-900">Free Counselling</h3>
                <p className="text-xs text-gray-500 mt-0.5">Fill in your details — we'll get back to you shortly</p>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto flex-1 px-5 py-4">
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>

                    {/* Name */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-600">First Name <span className="text-red-500">*</span></label>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Rahul" required className={inputClass} />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-600">Last Name</label>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Kumar" className={inputClass} />
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-600">Mobile Number <span className="text-red-500">*</span></label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required className={inputClass} />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-600">Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="rahul@example.com" className={inputClass} />
                    </div>

                    {/* NEET + 12th */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-600">NEET Score <span className="text-red-500">*</span></label>
                            <input type="number" name="neetScore" value={formData.neetScore} onChange={handleChange} placeholder="e.g. 450" required min={0} max={720} className={inputClass} />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-600">12th Percentage <span className="text-red-500">*</span></label>
                            <input type="number" name="twelfthPercent" value={formData.twelfthPercent} onChange={handleChange} placeholder="e.g. 75" required min={0} max={100} className={inputClass} />
                        </div>
                    </div>

                    {/* Country */}
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-600">Preferred Country</label>
                        <select name="country" value={formData.country} onChange={handleChange} className={inputClass}>
                            <option value="">-- Select Country --</option>
                            {countries.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                    </div>

                    {/* University */}
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-600">Preferred University</label>
                        <select
                            name="university"
                            value={formData.university}
                            onChange={handleChange}
                            disabled={!formData.country}
                            className={`${inputClass} ${!formData.country ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            <option value="">-- Select University --</option>
                            {availableUniversities.map((u) => (
                                <option key={u} value={u}>{u}</option>
                            ))}
                        </select>
                        {!formData.country && (
                            <p className="text-[11px] text-gray-400">Select a country first</p>
                        )}
                    </div>

                    {/* Query */}
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-600">Your Query <span className="text-red-500">*</span></label>
                        <textarea
                            name="query"
                            value={formData.query}
                            onChange={handleChange}
                            rows={3}
                            required
                            placeholder="How can we help you?"
                            className={`${inputClass} resize-none`}
                        />
                    </div>

                </form>
            </div>

            {/* Fixed Footer Buttons */}
            <div className="px-5 py-4 border-t border-gray-100 flex-shrink-0 grid grid-cols-2 gap-3">
                <button
                    type="button"
                    onClick={() => sendToWhatsApp("8862851969", formData)}
                    className="w-full flex items-center justify-center gap-2 bg-white border-2 border-green-500 hover:bg-green-50 transition-all text-green-600 font-bold py-2.5 rounded-xl text-xs sm:text-sm"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2A10 10 0 0 0 2 12a9.8 9.8 0 0 0 1.4 5.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm4.3 13.6c-.3.9-1.5 1.6-2.6 1.6-.6 0-1.4-.2-2.2-.6-1.1-.6-2.2-1.8-3-3.1-.7-1.2-1-2.2-.9-3 .2-1.1.9-2.3 1.8-2.5h.6c.2 0 .5.6.7 1.3.1.7.3 1.3.2 1.5-.1.3-.2.3-.4.6-.2.2-.3.3-.5.5-.2.2-.4.4-.2.7.1.3.5.8.8 1.2.5.6 1.1 1.1 1.8 1.4.2.1.4.1.6-.1.2-.2.8-.9 1-.9s.5 0 .8.2c.3.1 1 .4 1.1.5.2.1.3.2.4.3 0 .3 0 .7-.1 1z" />
                    </svg>
                    88628-51969
                </button>

                <button
                    type="button"
                    onClick={() => sendToWhatsApp("7667962400", formData)}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 active:scale-[0.98] transition-all text-white font-bold py-2.5 rounded-xl shadow-lg shadow-green-500/30 text-xs sm:text-sm"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2A10 10 0 0 0 2 12a9.8 9.8 0 0 0 1.4 5.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm4.3 13.6c-.3.9-1.5 1.6-2.6 1.6-.6 0-1.4-.2-2.2-.6-1.1-.6-2.2-1.8-3-3.1-.7-1.2-1-2.2-.9-3 .2-1.1.9-2.3 1.8-2.5h.6c.2 0 .5.6.7 1.3.1.7.3 1.3.2 1.5-.1.3-.2.3-.4.6-.2.2-.3.3-.5.5-.2.2-.4.4-.2.7.1.3.5.8.8 1.2.5.6 1.1 1.1 1.8 1.4.2.1.4.1.6-.1.2-.2.8-.9 1-.9s.5 0 .8.2c.3.1 1 .4 1.1.5.2.1.3.2.4.3 0 .3 0 .7-.1 1z" />
                    </svg>
                    76679-62400
                </button>
            </div>

        </div>
    );
};

export default CounsellingForm;