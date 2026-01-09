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

      {/* VISIT US */}
<section className="visit-us-section py-5">
  <div className="container">
    <div className="row align-items-center g-5">
      
      
      
      
      
      {/* LEFT IMAGE */}
      <div className="col-md-6">
        <div className="visit-image"></div>
      </div>




      {/* RIGHT CONTENT */}
      <div className="col-md-6">
        <h2 className="fw-bold mb-3">Visit Us</h2>
        <p className="text-muted mb-4">
          Experience premium wooden furniture and interior craftsmanship in
          person. Our showroom is open all days, including Sunday.
        </p>

        <div className="visit-info mb-3">
          <h6 className="fw-bold">📍 Location</h6>
          <p>M.M.M Furniture Interior Decor</p>
        </div>



{/* CONNECT WITH US */}
<section className="connect-section py-5">
  <div className="container">
    <div className="row align-items-center g-5">

      {/* IMAGE */}
     <div className="col-lg-6">
        <div className="static-location-image"></div>
      </div>




      {/* CONTENT */}
      <div className="col-lg-6">
        <h2 className="fw-bold mb-3">Connect With M.M.M Furniture</h2>
        <p className="text-muted mb-4">
          Discover premium furniture craftsmanship by visiting our showroom
          or connecting with us online. We are available every day, including Sundays,
          to assist you with personalized interior solutions.
        </p>

        {/* LOCATION */}
         <div className="connect-box">
       <h6>📍 Showroom Location</h6>
        <p>
       <a
        href="https://www.google.com/maps/search/?api=1&query=MMM+Furniture+GR+Nagar+K+Pudur+Madurai"
       target="_blank"
       rel="noopener noreferrer"
       className="location-link"
       >
          M.M.M Furniture,<br />
        GR Nagar, 3rd Street, 1st Cross,<br />
         K. Pudur, Madurai – 625007,<br />
        Tamil Nadu, India
       </a>
        </p>
 </div>



        {/* TIME */}
        <div className="connect-box">
          <h6>⏰ Working Hours</h6>
          <p>
            Monday – Sunday: <strong>9:00 AM – 8:00 PM</strong><br />
            <span className="open-badge">Sunday Open</span>
          </p>
        </div>

        {/* CONTACT */}
        <div className="connect-box">
          <h6>📞 Contact Us</h6>

          <p>
            📱 <a href="tel:+918681897335">+91 86818 97335</a><br />
            📱 <a href="tel:+916384169175">+91 63841 69175</a>
          </p>

          <p>
            ✉️ <a href="mailto:madeshkumarmano@gmail.com">madeshkumarmano@gmail.com</a><br />
            ✉️ <a href="mailto:mmminteriors@gmail.com">manoharan868189@gmail.com</a>
          </p>
        </div>



      </div>
       </div>
     </div>
     </section>




      </div>

    </div>
  </div>
</section>



    </>
  );
}
