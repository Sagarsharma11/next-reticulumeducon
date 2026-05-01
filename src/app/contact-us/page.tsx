"use client";

import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import CounsellingForm from "../../components/CounsellingForm/CounsellingForm";
import { sendToWhatsApp } from "../../utils/helper";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    query: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  return (
    <>
      <BreadCrumb nav="/contact-us" title="Contact Us" />

      <section className="bg-gray-50/50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Get in Touch with Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about your MBBS journey? Our expert counselors are here to help you every step of the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">

            {/* Left Column: Contact Info & Map */}
            <div className="lg:col-span-5 space-y-8">

              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Head Office</p>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Bagdulhan, near P.K. Jha School<br />
                        Beside ITI College Hajipur<br />
                        Dist- Vaishali (Bihar) 844101
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Phone Number</p>
                      <a href="tel:+918862851969" className="text-gray-600 hover:text-orange-600 text-sm block mb-1 transition-colors">
                        +91 88628 51969
                      </a>
                      <a href="tel:+917667962400" className="text-gray-600 hover:text-orange-600 text-sm block transition-colors">
                        +91 76679 62400
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Email Address</p>
                      <a href="mailto:reticulumeducon@gmail.com" className="text-gray-600 hover:text-orange-600 text-sm transition-colors block">
                        reticulumeducon@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <hr className="my-8 border-gray-100" />

                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-4">Connect With Us</p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://wa.me/917667962400" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12a9.8 9.8 0 0 0 1.4 5.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm4.3 13.6c-.3.9-1.5 1.6-2.6 1.6-.6 0-1.4-.2-2.2-.6-1.1-.6-2.2-1.8-3-3.1-.7-1.2-1-2.2-.9-3 .2-1.1.9-2.3 1.8-2.5h.6c.2 0 .5.6.7 1.3.1.7.3 1.3.2 1.5-.1.3-.2.3-.4.6-.2.2-.3.3-.5.5-.2.2-.4.4-.2.7.1.3.5.8.8 1.2.5.6 1.1 1.1 1.8 1.4.2.1.4.1.6-.1.2-.2.8-.9 1-.9s.5 0 .8.2c.3.1 1 .4 1.1.5.2.1.3.2.4.3 0 .3 0 .7-.1 1z" /></svg>
                    </a>
                    <a href="https://www.instagram.com/reticulumeducon/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" /></svg>
                    </a>
                    <a href="https://www.facebook.com/reticulumeducon" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7v-3h3.5V9.5c0-3.4 2-5.2 5-5.2 1.4 0 2.9.3 2.9.3v3.2H16c-1.6 0-2.1 1-2.1 2v2.2h3.6l-.6 3h-3v7A10 10 0 0 0 22 12z" /></svg>
                    </a>
                    <a href="https://www.youtube.com/@Mbbs-abroad" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map embedded */}
              <div className="rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 h-64 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898.8244452823602!2d85.21743877917665!3d25.694562907473244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5d66d5959793%3A0xf8208c995c7b4b9e!2sRETICULUM%20EDUCON%20LLP!5e0!3m2!1sen!2sin!4v1643443515439!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen={false}
                  loading="lazy">
                </iframe>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <CounsellingForm formData={formData} handleChange={handleChange} sendToWhatsApp={sendToWhatsApp} />
              {/* <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">First Name <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe" 
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210" 
                      required
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Your Query <span className="text-red-500">*</span></label>
                    <textarea 
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      rows={5} 
                      required
                      placeholder="How can we help you?"
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button 
                      type="button" 
                      onClick={() => sendToWhatsApp("8862851969")}
                      className="w-full flex items-center justify-center gap-2 bg-white border-2 border-green-500 hover:bg-green-50 transition-all text-green-600 font-bold py-4 rounded-xl text-[15px]"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12a9.8 9.8 0 0 0 1.4 5.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm4.3 13.6c-.3.9-1.5 1.6-2.6 1.6-.6 0-1.4-.2-2.2-.6-1.1-.6-2.2-1.8-3-3.1-.7-1.2-1-2.2-.9-3 .2-1.1.9-2.3 1.8-2.5h.6c.2 0 .5.6.7 1.3.1.7.3 1.3.2 1.5-.1.3-.2.3-.4.6-.2.2-.3.3-.5.5-.2.2-.4.4-.2.7.1.3.5.8.8 1.2.5.6 1.1 1.1 1.8 1.4.2.1.4.1.6-.1.2-.2.8-.9 1-.9s.5 0 .8.2c.3.1 1 .4 1.1.5.2.1.3.2.4.3 0 .3 0 .7-.1 1z" /></svg>
                      Send to 88628-51969
                    </button>
                    
                    <button 
                      type="button" 
                      onClick={() => sendToWhatsApp("7667962400")}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 active:scale-[0.98] transition-all text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/30 text-[15px]"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12a9.8 9.8 0 0 0 1.4 5.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm4.3 13.6c-.3.9-1.5 1.6-2.6 1.6-.6 0-1.4-.2-2.2-.6-1.1-.6-2.2-1.8-3-3.1-.7-1.2-1-2.2-.9-3 .2-1.1.9-2.3 1.8-2.5h.6c.2 0 .5.6.7 1.3.1.7.3 1.3.2 1.5-.1.3-.2.3-.4.6-.2.2-.3.3-.5.5-.2.2-.4.4-.2.7.1.3.5.8.8 1.2.5.6 1.1 1.1 1.8 1.4.2.1.4.1.6-.1.2-.2.8-.9 1-.9s.5 0 .8.2c.3.1 1 .4 1.1.5.2.1.3.2.4.3 0 .3 0 .7-.1 1z" /></svg>
                      Send to 76679-62400
                    </button>
                  </div>
                </form>
              </div> */}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;