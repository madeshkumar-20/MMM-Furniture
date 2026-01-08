"use client";

import { useEffect, useState } from "react";
import "@/styles/sticky-services.css";

const services = [
  { title: "Custom Wooden Furniture", desc: "Teak, plywood & solid wood furniture." },
  { title: "Modular Kitchen", desc: "Premium kitchens with smart storage." },
  { title: "Wardrobes", desc: "Sliding, hinged & walk-in wardrobes." },
  { title: "TV Units", desc: "Modern & luxury TV display units." },
  { title: "Bedroom Interiors", desc: "Beds, dressers & side tables." },
  { title: "Living Room Decor", desc: "Sofas, partitions & wall panels." },
  { title: "Office Furniture", desc: "Ergonomic desks & workstations." },
  { title: "False Ceiling", desc: "POP & wooden ceiling designs." },
  { title: "Lighting Solutions", desc: "Ambient & decorative lighting." },
  { title: "Commercial Interiors", desc: "Showrooms & retail spaces." },
  { title: "Restaurant Interiors", desc: "Cafe & hotel furniture setups." },
  { title: "End-to-End Solutions", desc: "Design → Manufacturing → Install." },
];

export default function ServicePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll(".content-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.getAttribute("data-index")));
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="sticky-layout">
        {/* LEFT STICKY MENU */}
        <aside className="sticky-menu">
          {services.map((s, i) => (
            <div
              key={i}
              className={`menu-card ${activeIndex === i ? "active" : ""}`}
            >
              <span>{i + 1}</span>
              <h6>{s.title}</h6>
            </div>
          ))}
        </aside>

        {/* RIGHT CONTENT */}
        <main className="scroll-area">
          {services.map((s, i) => (
            <section
              key={i}
              data-index={i}
              className="content-section"
            >
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
            </section>
          ))}
        </main>
      </div>

      {/* SCROLL BUTTON */}
      <button
        className="scroll-top-btn"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      >
        ↑
      </button>
    </>
  );
}
  