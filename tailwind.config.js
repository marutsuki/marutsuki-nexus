/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        gradient1: "linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)",
      }
    },
  },
  plugins: [],
}

