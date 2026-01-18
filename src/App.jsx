import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contect";
import About from "./components/About";
import Project from "./components/Project";
import BackToTop from "./components/BackToTop";
import profile from "./assets/profile.png"

function App() {
  const location = useLocation();

  useEffect(() => {
    // map pathname to section id (remove leading slash)
    const path = location.pathname === "/" ? "hero" : location.pathname.replace("/", "");
    // fallback: if empty -> hero
    const id = path || "hero";

    // small delay ensures layout ready (useful on first load)
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // if element not found, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 50);
  }, [location]);

  return (
    <>
    <Navbar />

      <main className="pt-20">
          

        <section id="hero"><Hero portrait={profile}/></section>

        <section id="services"><Services /></section>

        <section id="about"><About /></section>

        <section id="portfolio"><Project /></section>

        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    
      <Routes>
        <Route path="/" element={null} />
        <Route path="/services" element={null} />
        <Route path="/about" element={null} />
        <Route path="/portfolio" element={null} />
        <Route path="/contact" element={null} />
      </Routes>
      <BackToTop/>
    </>
  );
}

export default App;
