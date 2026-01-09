"use client";

import { useEffect, useRef, useState } from "react";

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export default function StickyContact() {
  const [open, setOpen] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (open && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [open]);

  // 🔹 Validation
  const validate = () => {
    const e: FormErrors = {};

    if (!form.name.trim()) e.name = "Name is required";

    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      e.email = "Enter a valid email address";
    }

    if (!form.phone.trim()) {
      e.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      e.phone = "Enter a valid 10-digit mobile number";
    }

    if (!form.message.trim()) e.message = "Message is required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // 🔹 Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
        setErrors({});
        setOpen(false);
      } else {
        alert("Failed to send message. Try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="sticky-chat-btn" onClick={() => setOpen(true)}>
        💬
      </div>

      {/* Popup */}
      {open && (
        <div className="contact-modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="contact-modal animate-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>

            <h5 className="text-center mb-3 fw-bold">
              Contact M.M.M Furniture
            </h5>

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <input
                ref={firstInputRef}
                type="text"
                className={`form-control fancy-input ${
                  errors.name ? "is-invalid" : ""
                }`}
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                  setErrors({ ...errors, name: "" });
                }}
              />
              {errors.name && (
                <small className="text-danger">{errors.name}</small>
              )}

              {/* Email */}
              <input
                type="email"
                className={`form-control fancy-input ${
                  errors.email ? "is-invalid" : ""
                }`}
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                  setErrors({ ...errors, email: "" });
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}

              {/* Phone */}
              <input
                type="tel"
                maxLength={10}
                inputMode="numeric"
                className={`form-control fancy-input ${
                  errors.phone ? "is-invalid" : ""
                }`}
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setForm({ ...form, phone: value });
                  setErrors({ ...errors, phone: "" });
                }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone}</small>
              )}

              {/* Message */}
              <textarea
                className={`form-control fancy-input ${
                  errors.message ? "is-invalid" : ""
                }`}
                rows={3}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });
                  setErrors({ ...errors, message: "" });
                }}
              />
              {errors.message && (
                <small className="text-danger">{errors.message}</small>
              )}

              <button className="btn btn-danger w-100 mt-3 fancy-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
