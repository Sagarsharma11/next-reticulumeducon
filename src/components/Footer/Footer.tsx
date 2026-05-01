import React from "react";
import {
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import FloatingWhatsApp from "../FloatingWhatsApp/FloatingWhatsApp";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 font-sans border-t-4 border-orange-500 relative overflow-hidden">

      <FloatingWhatsApp />

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

        {/* About Column */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-black text-white tracking-tight mb-2 flex items-center">
            RETICULUM<span className="text-orange-500">.</span>
          </h2>
          <p className="text-sm font-medium text-orange-400 mb-6 uppercase tracking-widest">Educon LLP</p>
          <p className="text-sm text-gray-400 leading-relaxed mb-8">
            Providing complete, transparent, and expert guidance for MBBS aspirants. We simplify the admission process so students can confidently step into their dream medical college abroad.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: FaTwitter, link: "https://x.com/RETICULUMEDUCON" },
              { icon: FaYoutube, link: "https://www.youtube.com/@mbbs-abroad_reticulum" },
              { icon: FaFacebookF, link: "https://www.facebook.com/people/Reticulum-Educon/61575752228683/?mibextid=wwXIfr&rdid=SjnWWZOp7WdTxge9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BK4z7iWQ8%2F%3Fmibextid%3DwwXIfr" },
              { icon: FaWhatsapp, link: "https://wa.me/917667962400" },
              { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/reticulum-educon-937187229" },
              { icon: FaInstagram, link: "https://www.instagram.com/reticulum_mbbsabroad?igsh=NmtsNXQ2Zm02aDNk" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-1">
          <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-400 font-medium">
            {['Home', 'About Us', 'Gallery', 'Services', 'Contact Us'].map((link, idx) => {
              const paths = ['/', '/about', '/gallery', '/service', '/contact-us'];
              return (
                <li key={idx}>
                  <a href={paths[idx]} className="hover:text-orange-400 hover:translate-x-1 inline-block transition-all duration-300">
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Top Destinations */}
        <div className="lg:col-span-1">
          <h3 className="text-white font-bold text-lg mb-6">Destinations</h3>
          <ul className="space-y-3 text-sm text-gray-400 font-medium">
            {['Russia', 'Kazakhstan', 'Georgia', 'Uzbekistan', 'Bangladesh'].map((country, idx) => (
              <li key={idx}>
                <a href={`/mbbs/${country.toLowerCase()}`} className="hover:text-orange-400 hover:translate-x-1 inline-block transition-all duration-300">
                  Study in {country}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info column */}
        <div className="lg:col-span-1">
          <h3 className="text-white font-bold text-lg mb-6">Get In Touch</h3>

          <div className="space-y-5">
            {/* <div className="flex items-start gap-4 text-sm text-gray-400">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-orange-500">
                <FaMapMarkerAlt size={16} />
              </div>
              <p className="pt-1 leading-relaxed">
                <strong className="text-white block mb-1">Head Office</strong>
                Bagdulhan, near P.K. Jha School, beside ITI College Hajipur, Vaishali (Bihar) – 844101
              </p>
            </div> */}
            <div className="space-y-10">

              {/* Main Office */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Head Office</h2>

                <div className="flex items-start gap-4 text-sm text-gray-400">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-orange-500">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <p className="pt-1 leading-relaxed">
                    Bagdulhan, Near P.K. Jha School, Beside ITI College, Hajipur, Vaishali (Bihar) – 844101
                  </p>
                </div>
              </div>

              {/* Branch Offices */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Branch Offices</h2>

                <div className="space-y-6">

                  {/* Odisha */}
                  <div className="flex items-start gap-4 text-sm text-gray-400">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-orange-500">
                      <FaMapMarkerAlt size={16} />
                    </div>
                    <p className="pt-1 leading-relaxed">
                      <strong className="text-white block mb-1">Odisha</strong>
                      Plot No. 1552/9266, Ground Floor, Satya Vihar, Bhomikhal (Near Apollo Pharma), Bhubaneswar, Khorda, Odisha – 751010
                    </p>
                  </div>

                  {/* Bhagalpur */}
                  <div className="flex items-start gap-4 text-sm text-gray-400">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-orange-500">
                      <FaMapMarkerAlt size={16} />
                    </div>
                    <p className="pt-1 leading-relaxed">
                      <strong className="text-white block mb-1">Bhagalpur, Bihar</strong>
                      Asanandpur Muslim Minority Degree College, Opposite Gate No. 2, Bhagalpur, Bihar
                    </p>
                  </div>

                  {/* Jamshedpur */}
                  <div className="flex items-start gap-4 text-sm text-gray-400">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-orange-500">
                      <FaMapMarkerAlt size={16} />
                    </div>
                    <p className="pt-1 leading-relaxed">
                      <strong className="text-white block mb-1">Jamshedpur, Jharkhand</strong>
                      Plot No. 902, Road No. 15, Near Nature Park Gate, Mango, Jamshedpur
                    </p>
                  </div>

                </div>
              </div>

            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-orange-500">
                <FaPhoneAlt size={14} />
              </div>
              <div className="pt-1 flex flex-col">
                <a href="tel:8862851969" className="hover:text-orange-400 transition-colors">88628-51969</a>
                <a href="tel:7667962400" className="hover:text-orange-400 transition-colors">76679-62400</a>
              </div>
            </div>

            {/* <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-orange-500">
                <FaEnvelope size={14} />
              </div>
              <div className="pt-1 text-orange-400 hover:text-white transition-colors cursor-pointer">
                info@reticulum.com
              </div>
            </div> */}
          </div>
        </div>

      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-white">Reticulum Educon LLP</span>. All Rights Reserved.
          </p>
          <p>
            Designed & Developed by{" "}
            <a
              href="https://sagarsharma.vercel.app"
              target="_blank"
              className="text-orange-500 hover:text-orange-400 transition-colors font-bold tracking-wide"
            >
              Sagar Sharma
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
