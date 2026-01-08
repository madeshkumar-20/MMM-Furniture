"use client";

import { useEffect, useRef, useState } from "react";

export default function StickyContact() {
  const [open, setOpen] = useState(false);

  const firstInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (open && firstInputRef.current) {
      firstInputRef.current.focus(); // 🔥 Auto focus
    }
  }, [open]);

  const validate = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const e: any = {};

    if (!form.name.trim()) e.name = "Name required";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!/^[6-9]\d{9}$/.test(form.phone))
      e.phone = "Enter valid 10-digit phone";
    if (!form.message.trim()) e.message = "Message required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   if (!validate()) return;

  //   alert("Thank you! We will contact you shortly.");
  //   setForm({ name: "", email: "", phone: "", message: "" });
  //   setOpen(false);
  // };
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  //  setSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        // toast.current?.show({
        //   severity: "success",
        //   summary: "Success",
        //   detail: "Message sent successfully! We'll get back to you soon.",
        //   life: 5000,
        // });
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        // toast.current?.show({
        //   severity: "error",
        //   summary: "Error",
        //   detail: "Failed to send message. Please try again.",
        //   life: 5000,
        // });
      }
    } catch (error) {
      // toast.current?.show({
      //   severity: "error",
      //   summary: "Network Error",
      //   detail: "Please check your connection and try again.",
      //   life: 5000,
      // });
    } finally {
    }
  };
  return (
    <>
      {/* FLOATING BUTTON */}
      <div className="sticky-chat-btn" onClick={() => setOpen(true)}>
        💬
      </div>

      {/* POPUP */}
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
              <input
                ref={firstInputRef}
                className="form-control fancy-input"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
              {errors.name && <small>{errors.name}</small>}

              <input
                className="form-control fancy-input"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
              {errors.email && <small>{errors.email}</small>}

              <input
                className="form-control fancy-input"
                placeholder="phone Number"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />
              {errors.phone && <small>{errors.phone}</small>}

              <textarea
                className="form-control fancy-input"
                rows={3}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />
              {errors.message && <small>{errors.message}</small>}

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

