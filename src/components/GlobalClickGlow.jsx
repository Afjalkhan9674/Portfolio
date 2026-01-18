import { useEffect } from "react";

const GlobalClickGlow = () => {
  useEffect(() => {
    const handleClick = (e) => {
      if (
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        return;
      }

      const glow = document.createElement("div");

      // ✅ Tailwind classes ONLY
      glow.className = `
        fixed
        w-32 h-32
        rounded-full
        pointer-events-none
        bg-orange-500/40
        blur-2xl
        -translate-x-1/2 -translate-y-1/2
        scale-0
        transition-all duration-500 ease-out
      `;

      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
      glow.style.zIndex = "9999";

      document.body.appendChild(glow);

      // trigger animation
      requestAnimationFrame(() => {
        glow.classList.remove("scale-0");
        glow.classList.add("scale-150", "opacity-0");
      });

      // remove after animation
      setTimeout(() => {
        glow.remove();
      }, 500);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
};

export default GlobalClickGlow;
