module.exports = {
  content: ["./src/*.{html,js}"],
  media: false,
  theme: {
    extend: {
      fontFamily: {
        primary: ["OpenSans", "sans-serif"],
        secondary: ["Raleway", "sans-serif"],
      },
      colors: {
        primary: {
          mainBg: "hsl(218, 28%, 13%)",
          intro_emailBg: "hsl(217, 28%, 15%)",
          testimonialsBG: "hsl(219, 30%, 18%)",
          footerBg: "hsl(216, 53%, 9%)",
        },
        accent: {
          cyan: "hsl(176, 68%, 64%)",
          blue: "hsl(198, 60%, 50%)",
          error: "hsl(0, 100%, 63%)",
        },
      },
      backgroundImage: {
        'landingSmallBg': "url('/images/bg-curvy-mobile.svg')",
        'landingBigBg': "url('/images/bg-curvy-desktop.svg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
