import React, { useEffect, useRef, useState } from "react";
import { FiDownload } from "react-icons/fi";
import profile from "../../public/profile.png"


const skills = [
    { name: "HTML & CSS", level: 100, short: "HC" },
    { name: "JavaScript", level: 95, short: "JS" },
    { name: "React.js", level: 90, short: "R" },
    { name: "Node & Express", level: 85, short: "N" },
    { name: "MySQL / MongoDB", level: 80, short: "DB" },
];

const About = () => {
    const skillsRef = useRef(null);
    const [progress, setProgress] = useState(skills.map(() => 0));
    const [started, setStarted] = useState(false);

    // 🔥 start animation when section visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                    animateSkills();
                }
            },
            { threshold: 0.4 }
        );

        if (skillsRef.current) observer.observe(skillsRef.current);
        return () => observer.disconnect();
    }, [started]);

    // 🎯 animate ring + number (0 → target)
    const animateSkills = () => {
        const duration = 2500; // 2.5 seconds
        const startTime = performance.now();

        const animate = (time) => {
            const elapsed = time - startTime;
            const progressRatio = Math.min(elapsed / duration, 1);

            const updated = skills.map(skill =>
                Math.round(skill.level * progressRatio)
            );

            setProgress(updated);

            if (progressRatio < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    return (
        <section className="min-h-screen w-full bg-black text-gray-200 flex items-center justify-center px-4 py-12">
            <div className="max-w-6xl w-full border border-dashed border-gray-700 rounded-2xl px-6 py-10 md:px-10 md:py-14 bg-[#050505]">

                {/* heading */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        About Me
                    </h2>
                    <p className="mt-2 text-xs md:text-sm text-gray-400">
                        Full Stack Web Developer • Frontend & Backend Development
                    </p>
                </div>

                {/* top content */}
                <div className="mt-10 grid gap-10 md:grid-cols-2 items-center">
                    <div className="flex justify-center">
                        <div className="w-64 h-80 md:w-72 md:h-[22rem] rounded-3xl overflow-hidden">
                            <img
                                src={profile}
                                alt="Profile"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                    </div>

                    <div className="text-xs md:text-sm text-gray-300 space-y-3">
                        <p>I love building fast and user-friendly web apps.</p>
                        <p>Frontend with HTML, CSS, JS & React.</p>
                        <p>Backend with Node, Express & Databases.</p>
                        <p>Always improving my skills.</p>

                        <div className="pt-4">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition"
                            >
                                <FiDownload />
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>

                {/* ===== SKILLS ===== */}
                <div
                    ref={skillsRef}
                    className="mt-10 md:mt-12 grid gap-8 sm:grid-cols-3 md:grid-cols-5"
                >
                    {skills.map((skill, index) => (
                        <div key={skill.name} className="flex flex-col items-center">
                            {/* ring */}
                            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center">
                                {/* animated arc */}
                                <div
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        background: `conic-gradient(
                                            #f97316 ${progress[index] * 3.6}deg,
                                            #1f1f1f 0deg
                                        )`,
                                    }}
                                ></div>

                                {/* thickness same */}
                                <div className="absolute inset-[6px] rounded-full bg-[#050505]"></div>

                                {/* center */}
                                <div className="relative w-12 h-12 rounded-full bg-[#111] flex items-center justify-center">
                                    <span className="text-sm font-semibold">
                                        {skill.short}
                                    </span>
                                </div>
                            </div>

                            {/* animated number */}
                            <p className="mt-3 text-xs md:text-sm font-semibold">
                                {progress[index]}%
                            </p>
                            <p className="text-[11px] md:text-xs text-gray-400 mt-1">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
