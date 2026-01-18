/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  // 👇 PRODUCTION CLICK GLOW FIX
  safelist: [
    "fixed",
    "w-32",
    "h-32",
    "rounded-full",
    "pointer-events-none",
    "bg-orange-500/40",
    "blur-2xl",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "scale-0",
    "scale-150",
    "opacity-0",
    "transition-all",
    "duration-500",
    "ease-out",
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
