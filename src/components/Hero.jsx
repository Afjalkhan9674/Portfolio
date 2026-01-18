import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

const Hero = ({ portrait }) => {
  return (
    <header className="w-full bg-[#0f0f0f] text-white py-32 max-[600px]:py-20">
      <div className="max-w-7xl mx-auto px-6 max-[600px]:px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div
          className="
            space-y-6
            max-[600px]:space-y-4
            max-[600px]:flex
            max-[600px]:flex-col
            max-[600px]:items-center
            max-[600px]:text-center
          "
        >
          <div className="text-sm text-gray-400">Hi I am</div>
          <div className="text-lg text-gray-300">Afjal Khan</div>

          <h1
            className="text-4xl md:text-5xl max-[600px]:text-3xl font-extrabold"
            style={{ color: "#ff7a00" }}
          >
            Web developer
          </h1>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 mt-10 max-[600px]:justify-center">
            <a href="https://www.instagram.com/afjalkhan4840" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-[#111] border border-[#2a2a2a] rounded-full hover:border-orange-500 transition">
              <FaInstagram size={18} />
            </a>

            <a href="https://www.linkedin.com/in/afjal-khan-a134b9389/" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-[#111] border border-[#2a2a2a] rounded-full hover:border-orange-500 transition">
              <FaLinkedinIn size={18} />
            </a>

            <a href="https://github.com/Afjalkhan9674" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-[#111] border border-[#2a2a2a] rounded-full hover:border-orange-500 transition">
              <FaGithub size={18} />
            </a>

            <a href="https://wa.me/919649732507" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-[#111] border border-[#2a2a2a] rounded-full hover:border-orange-500 transition">
              <FaWhatsapp size={18} />
            </a>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-10 max-[600px]:justify-center">
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition"
            >
              Hire Me
            </a>

            <a
              href="https://www.canva.com/design/DAG4kSitkpQ/y0OGvk1t2DxF_SCpRV9tug/view?utm_content=DAG4kSitkpQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h90f2f2a983"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition flex items-center gap-2"
            >
              <FiDownload />
              Download CV
            </a>
          </div>

          {/* STATS */}
          <div className="mt-14 bg-[#0a0a0a] border border-[#1f1f1f] p-5 rounded-lg flex gap-6 max-[600px]:flex-col">
            <div className="flex-1 text-center">
              <div className="text-[#FD6F00] font-bold text-lg">5+</div>
              <div className="text-sm text-gray-400">Training</div>
            </div>

            <div className="flex-1 text-center border-l border-r border-[#1f1f1f] max-[600px]:border-none">
              <div className="text-[#FD6F00] font-bold text-lg">20+</div>
              <div className="text-sm text-gray-400">Projects Done</div>
            </div>

            <div className="flex-1 text-center">
              <div className="text-[#FD6F00] font-bold text-lg">80+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE – PERFECT CIRCLE */}
         <div className="flex justify-center md:justify-end">
          <div
            className="
              relative
              w-[320px] h-[420px]
              md:w-[380px] md:h-[480px]
              max-[600px]:w-60 max-[600px]:h-72
              overflow-hidden
              rounded-2xl
              bg-black
              shadow-[0_0_40px_rgba(255,122,0,0.25)]
            "
          >
            <img
              src={portrait}
              alt="Afjal Khan"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>
    </header>
  );
};

export default Hero;

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 flex items-center justify-center bg-[#111] border border-[#2a2a2a] rounded-full hover:border-orange-500 transition"
  >
    {children}
  </a>
);

const Stat = ({ value, label, bordered }) => (
  <div
    className={`flex-1 text-center ${
      bordered ? "border-l border-r border-[#1f1f1f] max-[600px]:border-none" : ""
    }`}
  >
    <div className="text-orange-500 font-bold text-lg">{value}</div>
    <div className="text-sm text-gray-400">{label}</div>
  </div>
);
