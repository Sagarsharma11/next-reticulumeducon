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
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-violet-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Reticulum Educon</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Reticulum Educon LLP focuses on providing complete guidance for
              MBBS aspirants. From consultation to admission, we simplify the
              entire process so students and guardians can confidently move
              forward and study at their dream medical college abroad.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="/service" className="hover:text-white">Services</a></li>
              <li><a href="/contact-us" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>

            {/* Address */}
            <div className="flex items-start gap-2 text-sm text-gray-200 mb-4">
              <FaMapMarkerAlt className="mt-1" />
              <p>
                <strong>H.O.</strong> – Bagdulhan, near P.K. Jha School, beside ITI
                College Hajipur, Vaishali (Bihar) – 844101
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 text-sm text-gray-200 mb-6">
              <FaPhoneAlt />
              <a href="tel:8862851969" className="hover:text-white">
                8862851969
              </a>
              ,
              <a href="tel:7667962400" className="hover:text-white">
                7667962400
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://twitter.com/RETICULUMEDUCON"
                target="_blank"
                className="hover:text-gray-300"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="https://www.youtube.com/@Mbbs-abroad"
                target="_blank"
                className="hover:text-gray-300"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href="https://www.facebook.com/reticulumeducon"
                target="_blank"
                className="hover:text-gray-300"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://wa.me/917667962400"
                target="_blank"
                className="hover:text-gray-300"
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/reticulum-educon-937187229"
                target="_blank"
                className="hover:text-gray-300"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://www.instagram.com/retic_ulum"
                target="_blank"
                className="hover:text-gray-300"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-violet-800 text-gray-200 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between gap-2">
          <div>
            © 2021–2022 |{" "}
            <a href="/" className="hover:text-white">
              www.reticulum.com
            </a>{" "}
            | All Rights Reserved
          </div>
          <div>
            Designed & Developed by{" "}
            <a
              href="https://sagarsharma.vercel.app"
              target="_blank"
              className="text-green-400 hover:underline"
            >
              Sagar Sharma
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
