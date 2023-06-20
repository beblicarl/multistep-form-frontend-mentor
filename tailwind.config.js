/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sidebar-desktop": "url('./src/assets/bg-sidebar-desktop.svg')",
        "sidebar-mobile": "url('./src/assets/bg-sidebar-mobile.svg')",
      },
      colors: {
        MarineBlue: "#00477d",
        PurplishBlue: "#6b49a8",
        PastelBlue: "#a4c1da",
        LightBlue: "#d0e0eb",
        StrawberryRed: "#e8495a",
        CoolGray: "#a8b2b9",
        LightGray: "#d9d9db",
        Magnolia: "#fbf4f3",
        Alabaster: "#fefcfc",
        White: "#ffffff",
      },
    },
  },
  plugins: [],
};
