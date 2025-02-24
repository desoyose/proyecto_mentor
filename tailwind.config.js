// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Blue": "hsl(246, 80%, 60%)",

        "Light-red_W" : "hsl(15, 100%, 70%)",
        "Soft-blue": "hsl(195, 74%, 62%)",
        "Light-red": "hsl(348, 100%, 68%)",
        "Lime-green": "hsl(145, 58%, 55%)",
        "Violet": "hsl(264, 64%, 52%)",
        "Soft-orange": "hsl(43, 84%, 65%)",
        
        // ### Neutral
        
        "Very-dark-blue": "hsl(226, 43%, 10%)",
        "Dark-blue": "hsl(235, 46%, 20%)",
        "Desaturated-blue": "hsl(235, 45%, 61%)",
        "Pale-Blue": "hsl(236, 100%, 87%)",
        
      },
    
      fontFamily: {
        Rubik: ['Rubik', 'monospace'],  // Configuración de fuente
      },
    },
  },
  plugins: [],
};
