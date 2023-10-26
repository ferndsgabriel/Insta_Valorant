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
      width:{
        'desktop':'calc(100% - 256px)'
      },

      keyframes:{
        'processStories':{
          '0%':{
            transform:'translateX(-90%)'
          },
          '80%':{
            transform:'translateX(-10%)'
          },
          '100%':{
            transform:'translateX(0%)'
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