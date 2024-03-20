/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  tailwindConfig: "./styles/tailwind.config.js",
  tailwindAttributes: ["myClassList"],
  theme: {
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
