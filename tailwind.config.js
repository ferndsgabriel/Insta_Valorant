/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth:{
        '0.5':'1px'
      },

      height:{
        'screenmobile':'calc(100vh - 112px)',
      },

      width:{
        'desktop':'calc(100% - 64px)'
      },

      keyframes:{
        'processStories':{
          '0%':{
            transform:'translateX(-200px)'
          },
          '100%':{
            transform:'translateX(0)'
          }
        }
      },


      animation:{
        'processStories':'processStories 5s'
      }

    },
  },
  plugins: [],
}