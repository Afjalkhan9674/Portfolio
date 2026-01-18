import React, { useState } from "react";

const categories = [
  "All",
  "Website Design",
  "Task",
  "Animation",
  "Panding",
];

// Projects Data
const projects = [
  {
    id: 1,
    name: "Car-Rentol",
    category: "Website Design",
    image: "../../public/carrentol.jpg",
    link: "https://car-rental-gules-chi.vercel.app/",
  },
  {
    id: 2,
    name: "Weather-app",
    category: "Task",
    image: "../../public/Watherapp.png",
    link: "https://wather-app-olive.vercel.app/",
  },
  {
    id: 3,
    name: "Fanta-Page",
    category: "Animation",
    image: "../../public/Fanta.png",
    link: "https://animation-website-ten-gilt.vercel.app/",
  },
  {
    id: 4,
    name: "QuickShow",
    category: "Website Design",
    image: "../../public/QuickShow.png",
    link: "https://quick-show-iota.vercel.app/",
  },
  {
    id: 5,
    name: "Calculator",
    category: "Task",
    image: "../../public/Calculator.png",
    link: "https://calculator-green-alpha.vercel.app/",
  },
  {
    id: 6,
    name: "All-Birds",
    category: "Website Design",
    image: "../../public/All-Birds.png",
    link: "https://all-birds-two.vercel.app/",
  },
 
];

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full min-h-screen bg-[#050505] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* TITLE */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
          Projects
        </h2>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  activeCategory === cat
                    ? "bg-[#FD6F00] text-white shadow-[0_0_20px_rgba(253,111,0,0.5)]"
                    : "bg-[#181818] text-gray-300 hover:bg-[#222]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID SECTION */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
              className="block bg-[#111] rounded-2xl overflow-hidden border border-[#1f1f1f] shadow-sm hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:-translate-y-2 transition-transform duration-200"
            >
              {/* IMAGE */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover"
                />
              ) : (
                <div className="w-full h-56 bg-gradient-to-br from-[#333] via-[#111] to-black 
                  flex items-center justify-center text-gray-400 text-sm">
                  Preview
                </div>
              )}

              {/* TEXT */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#101010] border-t border-[#242424] text-xs md:text-sm">
                <div className="flex flex-col">
                  <span className="text-gray-100">{project.name}</span>
                  <span className="text-[11px] text-gray-400 mt-0.5">
                    {project.category}
                  </span>
                </div>
                <span className="text-[11px] text-gray-400">Categories</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;
