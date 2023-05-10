
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const preserve3d = {
        ".preserve-3d": {
          "transform-style": "preserve-3d",
        },
      };
  
      addUtilities(preserve3d);
    }),
    plugin(function ({ addUtilities }) {
      const perspective = {
        ".perspective-none": {
          perspective: "none",
        },
        ".perspective-100": {
          perspective: "100px",
        },
        ".perspective-200": {
          perspective: "200px",
        },
        ".perspective-500": {
          perspective: "500px",
        },
        ".perspective-1000": {
          perspective: "1000px",
        },
      };
  
      addUtilities(perspective);
    }),
    plugin(function ({ matchUtilities, theme, addUtilities }) {
      matchUtilities(
        {
          "translate-z": (value) => ({
            "--tw-translate-z": value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme("translate"), supportsNegativeValues: true }
      );
    }),
    require("tailwindcss-3d"),
  ],
}
