import flowbite from 'flowbite/plugin';

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [flowbite],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        primary_dark: '#181818',
        secondary_dark: '#38bdf8',
        ink_dark: '#fff',
        primary_light: '#fff',
        secondary_light: '#0ea5e9',
        ink_light: '#000',
      },

    }
  }
};

module.exports = config;