import React, { useState } from "react";

const API_URL =
  import.meta.env.VITE_MAIL_API_URL ||
  "https://nodemailer-five-sigma.vercel.app/send-email";


const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    timeline: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "afjalkhan959674@gmail.com", // <- yaha apna email
          subject: `New Contact Message from ${form.name || "Portfolio"}`,
          html: `
            <h3>New Contact Message</h3>
            <p><strong>Name:</strong> ${form.name}</p>
            <p><strong>Email:</strong> ${form.email}</p>
            <p><strong>Phone:</strong> ${form.phone}</p>
            <p><strong>Service:</strong> ${form.service}</p>
            <p><strong>Timeline:</strong> ${form.timeline}</p>
            <p><strong>Message:</strong></p>
            <p>${form.message.replace(/\n/g, "<br/>")}</p>
          `,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Failed to send");
      }

      setStatus("Message sent! I will get back to you soon.");
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        timeline: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#111111] flex items-center justify-center px-4">
      <div className="w-full max-w-4xl text-gray-200">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Contact me
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Cultivating Connections: Reach Out And Connect With Me
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full bg-[#1c1c1c] text-sm text-gray-200 px-4 py-3 rounded-md border border-[#2b2b2b] focus:outline-none focus:border-orange-400 placeholder:text-gray-500"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full bg-[#1c1c1c] text-sm text-gray-200 px-4 py-3 rounded-md border border-[#2b2b2b] focus:outline-none focus:border-orange-400 placeholder:text-gray-500"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full bg-[#1c1c1c] text-sm text-gray-200 px-4 py-3 rounded-md border border-[#2b2b2b] focus:outline-none focus:border-orange-400 placeholder:text-gray-500"
            />

            <div className="relative">
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full bg-[#1c1c1c] text-sm text-gray-200 px-4 py-3 rounded-md border border-[#2b2b2b] focus:outline-none focus:border-orange-400 appearance-none"
              >
                <option value="">Service Of Interest</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Frontend Development">
                  Frontend Development
                </option>
                <option value="Backend Development">
                  Backend Development
                </option>
                <option value="Full Stack Web App">
                  Full Stack Web App
                </option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400 text-xs">
                ▼
              </span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              placeholder="Timeline"
              required
              className="w-full bg-[#1c1c1c] text-sm text-gray-200 px-4 py-3 rounded-md border border-[#2b2b2b] focus:outline-none focus:border-orange-400 placeholder:text-gray-500"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Project Details..."
              required
              rows="4"
              className="w-full bg-[#1c1c1c] text-sm text-gray-200 px-4 py-3 rounded-md border border-[#2b2b2b] focus:outline-none focus:border-orange-400 placeholder:text-gray-500 resize-none"
            />
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={sending}
             className="px-8 py-2 border rounded-md !rounded-md border-gray-400 text-sm hover:border-orange-400 hover:text-orange-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
>
              {sending ? "Sending..." : "Send"}
            </button>
          </div>

          {status && (
            <p className="text-sm text-center text-gray-300 mt-2">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
