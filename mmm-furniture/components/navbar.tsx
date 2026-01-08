"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        {/* LOGO */}
        <Link href="/" className="navbar-brand brand-logo">
          <div className="brand-wrap">
            <span className="brand-main">M.M.M</span>
            <span className="brand-sub">Furniture & Interior Decor</span>
          </div>
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-4 text-center">
            <li className="nav-item">
              <Link
                href="/"
                className="nav-link nav-item-custom"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/service"
                className="nav-link nav-item-custom"
                onClick={() => setOpen(false)}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/images"
                className="nav-link nav-item-custom"
                onClick={() => setOpen(false)}
              >
                Gallery
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
