import React from "react";

const services = [
  {
    title: "Landing Page Design",
    description:
      "Pixel-perfect, modern landing pages focused on conversions and clean UX.",
  },
  {
    title: "Frontend Development",
    description:
      "Responsive React / Tailwind interfaces that work smoothly on all devices.",
  },
  {
    title: "Backend Development",
    description:
      "Secure REST APIs with Node.js/Express and database integration.",
  },
  {
    title: "Full-Stack Web Apps",
    description:
      "From UI to database, complete business-ready web applications.",
  },
  {
    title: "Performance Optimization",
    description:
      "Faster load times, Core Web Vitals improvements and best practices.",
  },
  {
    title: "SEO & Maintenance",
    description:
      "On-page SEO, bug fixes and ongoing support for your website.",
  },
];

// simple orange icon (you can replace with any SVG/icon library)
const ServiceIcon = () => (
<span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-orange-600">
  <span className="text-2xl text-orange-500">{"</>"}</span>
</span>

);

const Services = () => {
  return (
    <section className="min-h-screen w-full bg-[#050505] text-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-3">
            Services
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-400">
            I build modern, responsive and fast web experiences tailored to your
            business needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#111111] rounded-3xl px-8 py-10 shadow-lg shadow-black/40 
                         flex flex-col items-center text-center text-orange-500
                         hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/60
                         transition-transform duration-200"
            >
              <ServiceIcon />

              <h3 className="mt-6 text-lg font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
