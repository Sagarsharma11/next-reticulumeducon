"use client";

import React, { useState, useEffect, useRef } from "react";
import CounsellingModal from "./Modal/CounsellingModal";

const countries = [
  { label: "Russia", slug: "russia", flag: "🇷🇺", region: "Eastern Europe" },
  { label: "Belarus", slug: "belarus", flag: "🇧🇾", region: "Eastern Europe" },
  // { label: "Ukraine", slug: "ukraine", flag: "🇺🇦", region: "Eastern Europe" },
  // { label: "Azerbaijan", slug: "azerbaijan", flag: "🇦🇿", region: "Caucasus" },
  { label: "Georgia", slug: "georgia", flag: "🇬🇪", region: "Caucasus" },
  { label: "Kyrgyzstan", slug: "kyrgyzstan", flag: "🇰🇬", region: "Central Asia" },
  { label: "Uzbekistan", slug: "uzbekistan", flag: "🇺🇿", region: "Central Asia" },
  { label: "Nepal", slug: "nepal", flag: "🇳🇵", region: "South Asia" },
  { label: "Philippines", slug: "philippines", flag: "🇵🇭", region: "Southeast Asia" },
  // { label: "Malaysia", slug: "malaysia", flag: "🇲🇾", region: "Southeast Asia" },
  { label: "Kazakhstan", slug: "kazakhstan", flag: "🇰🇿", region: "Central Asia" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        /* ── Top utility bar ── */
        .nb-topbar {
          background: #0f172a;
          padding: 7px 0;
          font-family: 'Inter', sans-serif;
        }
        .nb-topbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nb-topbar-left {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .nb-topbar-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
        }
        .nb-topbar-item:hover { color: #f97316; }
        .nb-topbar-icon { font-size: 13px; }
        .nb-topbar-right {
          font-size: 12px;
          color: rgba(255,255,255,0.5);
        }
        .nb-topbar-right span { color: #f97316; font-weight: 600; }

        /* ── Main header ── */
        .nb-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          font-family: 'Inter', sans-serif;
        }

        .nb-bar {
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          transition: box-shadow 0.3s, background 0.3s;
        }
        .nb-bar.scrolled {
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 2px 32px rgba(0,0,0,0.10);
          border-bottom-color: transparent;
        }

        .nb-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          gap: 32px;
          transition: height 0.3s;
        }
        .nb-bar.scrolled .nb-inner { height: 62px; }

        /* logo */
        .nb-logo img {
          height: 48px;
          width: auto;
          transition: height 0.3s;
          display: block;
        }
        .nb-bar.scrolled .nb-logo img { height: 40px; }

        /* ── Center nav links ── */
        .nb-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0;
          padding: 0;
          flex: 1;
          justify-content: center;
        }

        .nb-link {
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          color: #4b5563;
          padding: 8px 16px;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .nb-link:hover {
          color: #f97316;
          background: #fff7ed;
        }

        /* ── Countries dropdown trigger ── */
        .nb-drop-wrap {
          position: relative;
        }
        .nb-drop-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 14px;
          font-weight: 500;
          color: #4b5563;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 16px;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          transition: color 0.2s, background 0.2s;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
        .nb-drop-btn:hover,
        .nb-drop-btn.active {
          color: #f97316;
          background: #fff7ed;
        }
        .nb-drop-arrow {
          width: 18px;
          height: 18px;
          background: #f1f5f9;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 8px;
          color: #94a3b8;
          transition: transform 0.25s, background 0.2s, color 0.2s;
          flex-shrink: 0;
        }
        .nb-drop-btn.active .nb-drop-arrow {
          transform: rotate(180deg);
          background: #fff7ed;
          color: #f97316;
        }

        /* ── Mega Dropdown ── */
        .nb-mega {
          position: absolute;
          top: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%) translateY(-6px);
          width: 600px;
          background: #fff;
          border-radius: 20px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 24px 80px rgba(0,0,0,0.13), 0 4px 16px rgba(0,0,0,0.06);
          padding: 0;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.16,1,0.3,1), visibility 0.22s;
          overflow: hidden;
        }
        .nb-mega.open {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        /* arrow notch */
        .nb-mega::before {
          content: '';
          position: absolute;
          top: -7px;
          left: 50%;
          transform: translateX(-50%);
          width: 14px; height: 14px;
          background: #fff;
          border-left: 1px solid #e5e7eb;
          border-top: 1px solid #e5e7eb;
          border-radius: 3px 0 0 0;
          rotate: 45deg;
        }

        .nb-mega-head {
          padding: 18px 24px 14px;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nb-mega-head-title {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: #9ca3af;
        }
        .nb-mega-head-badge {
          background: #fff7ed;
          color: #f97316;
          font-size: 11px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 20px;
          border: 1px solid #fed7aa;
        }

        .nb-mega-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4px;
          padding: 14px 16px;
        }

        .nb-mega-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 14px;
          border-radius: 12px;
          text-decoration: none;
          color: #374151;
          transition: all 0.18s;
          border: 1px solid transparent;
        }
        .nb-mega-item:hover {
          background: #fff7ed;
          border-color: #fed7aa;
          color: #ea580c;
          transform: translateX(2px);
        }

        .nb-mega-flag {
          font-size: 26px;
          line-height: 1;
          flex-shrink: 0;
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.15));
        }
        .nb-mega-text { flex: 1; min-width: 0; }
        .nb-mega-name {
          font-size: 13px;
          font-weight: 600;
          color: inherit;
          white-space: nowrap;
          display: block;
        }
        .nb-mega-region {
          font-size: 11px;
          color: #9ca3af;
          margin-top: 2px;
          display: block;
        }
        .nb-mega-item:hover .nb-mega-region { color: #fb923c; }
        .nb-mega-arrow {
          font-size: 12px;
          color: #d1d5db;
          transition: color 0.18s, transform 0.18s;
        }
        .nb-mega-item:hover .nb-mega-arrow {
          color: #f97316;
          transform: translateX(3px);
        }

        .nb-mega-footer {
          padding: 14px 24px;
          background: #f8fafc;
          border-top: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nb-mega-footer-text {
          font-size: 12px;
          color: #9ca3af;
        }
        .nb-mega-footer-link {
          font-size: 12px;
          font-weight: 600;
          color: #f97316;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: gap 0.2s;
        }
        .nb-mega-footer-link:hover { gap: 8px; }

        /* ── CTA button ── */
        .nb-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 10px 22px;
          border-radius: 50px;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.25s;
          box-shadow: 0 4px 18px rgba(249,115,22,0.35);
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.01em;
          flex-shrink: 0;
        }
        .nb-cta:hover {
          box-shadow: 0 8px 30px rgba(249,115,22,0.45);
          transform: translateY(-2px);
        }

        /* ── Hamburger ── */
        .nb-burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 44px; height: 44px;
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          cursor: pointer;
          padding: 0;
          transition: background 0.2s, border-color 0.2s;
          flex-shrink: 0;
        }
        .nb-burger:hover { background: #fff7ed; border-color: #fed7aa; }
        .nb-burger span {
          display: block;
          width: 20px; height: 2px;
          background: #374151;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .nb-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nb-burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nb-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile drawer ── */
        .nb-backdrop {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(15,23,42,0.5);
          z-index: 1001;
          backdrop-filter: blur(4px);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s, visibility 0.3s;
        }
        .nb-backdrop.open { opacity: 1; visibility: visible; }

        .nb-drawer {
          display: none;
          position: fixed;
          top: 0; right: 0; bottom: 0;
          width: min(380px, 92vw);
          background: #fff;
          z-index: 1002;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
          overflow-y: auto;
          box-shadow: -8px 0 48px rgba(0,0,0,0.18);
        }
        .nb-drawer.open { transform: translateX(0); }

        .nb-drawer-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid #f1f5f9;
          position: sticky; top: 0;
          background: #fff; z-index: 1;
        }
        .nb-drawer-close {
          width: 38px; height: 38px;
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          border-radius: 50%;
          font-size: 16px; color: #6b7280;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .nb-drawer-close:hover { background: #fee2e2; border-color: #fca5a5; color: #ef4444; }

        .nb-drawer-section { padding: 12px 16px; }
        .nb-drawer-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: #9ca3af;
          padding: 0 4px 8px;
        }
        .nb-drawer-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 14px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          text-decoration: none;
          transition: all 0.18s;
        }
        .nb-drawer-link:hover { background: #fff7ed; color: #f97316; }

        .nb-drawer-divider {
          margin: 4px 16px;
          border: none;
          border-top: 1px solid #f1f5f9;
        }

        .nb-drawer-countries {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px;
          padding: 4px 16px;
        }
        .nb-drawer-country {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 10px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          color: #374151;
          transition: all 0.18s;
        }
        .nb-drawer-country:hover { background: #fff7ed; color: #f97316; }
        .nb-drawer-flag { font-size: 20px; }

        .nb-drawer-cta {
          padding: 12px 16px 32px;
        }
        .nb-drawer-cta a {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          padding: 14px;
          border-radius: 14px;
          text-decoration: none;
          box-shadow: 0 4px 18px rgba(249,115,22,0.35);
          transition: box-shadow 0.25s, transform 0.25s;
          font-family: 'Inter', sans-serif;
        }
        .nb-drawer-cta a:hover {
          box-shadow: 0 8px 30px rgba(249,115,22,0.45);
          transform: translateY(-1px);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .nb-links, .nb-cta { display: none !important; }
          .nb-burger { display: flex; }
          .nb-backdrop, .nb-drawer { display: block; }
          .nb-topbar { display: none; }
        }
        @media (max-width: 640px) {
          .nb-inner { padding: 0 16px; }
        }
      `}</style>

      {/* ── Top utility bar ── */}
      <div className="nb-topbar">
        <div className="nb-topbar-inner">
          <div className="nb-topbar-left">
            <a href="tel:+917667962400" className="nb-topbar-item">
              <span className="nb-topbar-icon">📞</span> +91-7667962400
            </a>
            {/* <a href="mailto:info@reticulumeducon.com" className="nb-topbar-item">
              <span className="nb-topbar-icon">✉️</span> info@reticulumeducon.com
            </a> */}
          </div>
          <div className="nb-topbar-right">
            NMC &amp; WHO Approved Universities &nbsp;|&nbsp; <span onClick={() => setOpen(true)} className="cursor-pointer">Free Counselling Available</span>
          </div>
        </div>
      </div>

      {/* ── Sticky Header ── */}
      <header className="nb-header">
        <div className={`nb-bar ${scrolled ? "scrolled" : ""}`}>
          <div className="nb-inner">

            {/* Logo */}
            <a href="/" className="nb-logo">
              <img src="/assets/images/logo/logo.jpeg" alt="Reticulum Educon"
                // className="h-12 w-auto transform transition-transform duration-300 hover:scale-110"
                className="h-12 w-auto transform transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"

              />
            </a>

            {/* Desktop links */}
            <ul className="nb-links">
              <li><a href="/" className="nb-link">Home</a></li>

              {/* MBBS Abroad Dropdown */}
              <li className="nb-drop-wrap" ref={dropRef}>
                <button
                  className={`nb-drop-btn ${dropOpen ? "active" : ""}`}
                  onClick={() => setDropOpen((v) => !v)}
                  aria-expanded={dropOpen}
                >
                  MBBS Abroad
                  <span className="nb-drop-arrow">▼</span>
                </button>

                <div className={`nb-mega ${dropOpen ? "open" : ""}`}>
                  {/* Header row */}
                  <div className="nb-mega-head">
                    <span className="nb-mega-head-title">Choose Your Destination</span>
                    <span className="nb-mega-head-badge">8 Countries</span>
                  </div>

                  {/* Country grid */}
                  <div className="nb-mega-grid">
                    {countries.map((c) => (
                      <a
                        key={c.slug}
                        href={`/mbbs/${c.slug}`}
                        className="nb-mega-item"
                        onClick={() => setDropOpen(false)}
                      >
                        <span className="nb-mega-flag">{c.flag}</span>
                        <span className="nb-mega-text">
                          <span className="nb-mega-name">MBBS in {c.label}</span>
                          <span className="nb-mega-region">{c.region}</span>
                        </span>
                        <span className="nb-mega-arrow">→</span>
                      </a>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="nb-mega-footer">
                    <span className="nb-mega-footer-text">Need help choosing?</span>
                    <a href="/contact-us" className="nb-mega-footer-link" onClick={() => setDropOpen(false)}>
                      Free Counselling →
                    </a>
                  </div>
                </div>
              </li>

              {navLinks.slice(1).map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="nb-link">{l.label}</a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <p onClick={() => setOpen(true)} className="nb-cta cursor-pointer transition-all duration-300 animate-cta">
              📞 Free Counselling
            </p>

            {/* Hamburger */}
            <button
              className={`nb-burger ${mobileOpen ? "open" : ""}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile backdrop ── */}
      <div
        className={`nb-backdrop ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Mobile drawer ── */}
      <div className={`nb-drawer ${mobileOpen ? "open" : ""}`}>
        <div className="nb-drawer-head">
          <a href="/" onClick={() => setMobileOpen(false)}>
            <img src="/assets/images/logo/logo.jpeg" alt="Logo" style={{ height: 36 }} />
          </a>
          <button className="nb-drawer-close" onClick={() => setMobileOpen(false)}>✕</button>
        </div>

        <div className="nb-drawer-section">
          <p className="nb-drawer-label">Navigation</p>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nb-drawer-link" onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>

        <hr className="nb-drawer-divider" />

        <div className="nb-drawer-section">
          <p className="nb-drawer-label">MBBS Abroad — Select Country</p>
        </div>
        <div className="nb-drawer-countries">
          {countries.map((c) => (
            <a
              key={c.slug}
              href={`/mbbs/${c.slug}`}
              className="nb-drawer-country"
              onClick={() => setMobileOpen(false)}
            >
              <span className="nb-drawer-flag">{c.flag}</span>
              {c.label}
            </a>
          ))}
        </div>

        <div className="nb-drawer-cta">
          <a href="/contact-us" onClick={() => setMobileOpen(false)}>
            📞 Get Free Counselling
          </a>
        </div>
      </div>

      <CounsellingModal open={open} setOpen={setOpen} />
    </>
  );
}
