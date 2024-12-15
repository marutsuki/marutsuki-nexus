/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        gradient1: "linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)",
        gradient2: "linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99)",
        gradient3: "linear-gradient(to right, #bdc3c7, #2c3e50)",
      },
      transitionTimingFunction: {
        overshoot: "cubic-bezier(0.175, 0.885, 0.32, 1.333);",
      },
    },
  },
  plugins: [],
}

