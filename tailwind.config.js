module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        twinkle: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.85" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "twinkle": "twinkle 1s ease-in-out",
        "pulse-slow": "pulse 8s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        tooltip: '#94a3b8',
      },
      fontSize: {
        tooltip: '10px',
      },
    },
  },
  plugins: [],
};
