"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  const countries = [
    "MBBS IN RUSSIA",
    "MBBS IN UKRAINE",
    "MBBS IN AZERBAIJAN",
    "MBBS IN GEORGIA",
    "MBBS IN KYRGYZSTAN",
    "MBBS IN UZBEKISTAN",
    "MBBS IN NEPAL",
    "MBBS IN PHILIPPINES",
    "MBBS IN MALAYSIA",
    "MBBS IN KAZAKHSTAN",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/assets/images/logo/logo.jpeg"
              alt="Logo"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">

            <li>
              <a href="/" className="hover:text-blue-600">Home</a>
            </li>

            {/* Countries Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setCountryOpen(true)}
              onMouseLeave={() => setCountryOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-blue-600">
                Countries
                <span className="text-xs">▼</span>
              </button>

              {countryOpen && (
                <ul className="absolute top-full mt-2 w-64 rounded-md border bg-white shadow-lg">
                  {countries.map((c, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-blue-50"
                      >
                        {c}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><a href="/about" className="hover:text-blue-600">About</a></li>
            <li><a href="/service" className="hover:text-blue-600">Services</a></li>
            <li><a href="/gallery" className="hover:text-blue-600">Gallery</a></li>
            <li><a href="/contact-us" className="hover:text-blue-600">Contact Us</a></li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t">
            <ul className="flex flex-col gap-4 py-4 text-sm text-gray-700">

              <li><a href="/">Home</a></li>

              <li>
                <button
                  className="flex w-full justify-between"
                  onClick={() => setCountryOpen(!countryOpen)}
                >
                  Countries
                  <span>{countryOpen ? "▲" : "▼"}</span>
                </button>

                {countryOpen && (
                  <ul className="mt-2 ml-4 space-y-2">
                    {countries.map((c, i) => (
                      <li key={i}>
                        <a href="#" className="block">
                          {c}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li><a href="/about">About</a></li>
              <li><a href="/service">Services</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
