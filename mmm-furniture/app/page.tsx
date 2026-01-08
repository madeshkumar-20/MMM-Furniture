"use client";

import { useState } from "react";


const experienceData = [
  {
    title: "Premium Wooden Craftsmanship",
    desc: "Each piece is handcrafted using high-grade wood, ensuring durability, elegance, and timeless beauty.",
    image: "/images/craftsmanship.jpg",
  },
  {
    title: "Modern Living Room Designs",
    desc: "Furniture that enhances comfort while reflecting your personal lifestyle and aesthetics.",
    image: "/images/rooms.jpg",
  },
  {
    title: "Elegant Bedroom Interiors",
    desc: "Designed for peace and relaxation, blending warmth, texture, and functionality.",
    image: "/images/elegant.jpg",
  },
  {
    title: "Office & Workspace Solutions",
    desc: "Ergonomic and professional designs that improve productivity and visual appeal.",
    image: "/images/fz.jpg",
  },
  {
    title: "Customized Modular Kitchens",
    desc: "Smart layouts with premium finishes for efficiency, beauty, and long-lasting quality.",
    image: "/images/kitchen.jpg",
  },
  {
    title: "Luxury Dining Experiences",
    desc: "Furniture crafted to bring families together with comfort and elegance.",
    image: "/images/lux.jpg",
  },
  {
    title: "Commercial & Retail Interiors",
    desc: "Stylish interiors that attract customers and strengthen your brand identity.",
    image: "/images/commercialshop.jpg",
  },
  {
    title: "End-to-End Interior Solutions",
    desc: "From design to installation, we manage everything with precision and care.",
    image: "/images/end.jpg",
  },
];

const features = [
  { title: "Expertise in Interiors", desc: "Complete furniture & interior solutions." },
  { title: "Award Winning", desc: "Trusted by hundreds of customers." },
  { title: "Free Consultation", desc: "Professional guidance for your space." },
  { title: "Reasonable Price", desc: "Affordable premium quality." },
  { title: "Guaranteed Work", desc: "Quality assurance guaranteed." },
  { title: "24/7 Support", desc: "Always available for you." },
];

const stats = [
  { value: "220+", label: "Work Done" },
  { value: "130+", label: "Projects" },
  { value: "150+", label: "Clients" },
  { value: "20+", label: "Locations" },
];

const services = [
  {
    title: "Residential Projects",
    desc: "Luxury home furniture solutions.",
    image: "/images/residentials.jpg",
  },
  {
    title: "Office Projects",
    desc: "Modern office interiors.",
    image: "/images/rectangles.jpg",
  },
  {
    title: "Commercial Projects",
    desc: "Showrooms & commercial spaces.",
    image: "/images/commercial.jpg",
  },
];



export default function HomePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const e: any = {};

    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validate()) {
      alert("Message submitted successfully");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="overlay">
          <div className="container text-center text-white">
            <h1>We Add Beauty & Aesthetics To Architecture</h1>
            <p>Premium wooden furniture & interior solutions</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="image-box-large"></div>
          </div>

          <div className="col-md-7">
            <div className="row g-4">
              {features.map((item, i) => (
                <div key={i} className="col-md-6">
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container text-white">
          <div className="row text-center">
            {stats.map((s, i) => (
              <div key={i} className="col-md-3">
                <h2>{s.value}</h2>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SCROLL */}
      <section className="experience-section">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            Crafted With Passion & Precision
          </h2>

          <div className="experience-wrapper">
            {experienceData.map((item, i) => (
              <div key={i} className="experience-card">
                <div
                  className="experience-img"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>

                <div className="experience-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="container py-5 text-center">
        <h2 className="fw-bold mb-4">What We Do</h2>
        <div className="row g-4">
          {services.map((s, i) => (
            <div key={i} className="col-md-4">
              <div className="service-box">
                <div
                  className="service-img"
                  style={{ backgroundImage: `url(${s.image})` }}
                ></div>
                <h5 className="mt-3">{s.title}</h5>
                <p className="text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
    </>
  );
}
