const theme = {
  // colors
  white: "#FFF",
  black: "#555555",
  surfRiderBlue: "#0073be",
  secondaryColor: "#70F9C5",

  // sizes
  maxWidth: "1042px",
  // font-sizes - scale: 1.250
  defaultFS: "0.813rem", // 13px
  biggerFS: "1rem", // 16xp
  mainTitleFS: "4.838rem", // 77.4px
  secondaryFS: "3.869rem", // 61.9px
  thirdFS: "3.099rem", // 49.959px
  fourthFS: "1.269rem", // 20.31px

  // menu
  menuHeight: "50px",
  ribbonWidth: "90px",

  // Screen sizes
  maxWidth: "1600px",
  desktopHeaderHeight: 80,

  size: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  },

  // spacing
  spacing: (x) => `${x * 1.3}rem`,
};

theme.device = {
  // default
  mobileS: `(min-width: ${theme.size.mobileS})`,
  mobileM: `(min-width: ${theme.size.mobileM})`,
  mobileL: `(min-width: ${theme.size.mobileL})`,
  tablet: `(min-width: ${theme.size.tablet})`,
  laptop: `(min-width: ${theme.size.laptop})`,
  laptopL: `(min-width: ${theme.size.laptopL})`,
  desktop: `(min-width: ${theme.size.desktop})`,
  desktopL: `(min-width: ${theme.size.desktop})`,
  // other
  belowTablet: `(max-width: calc(${theme.size.tablet} - 1px))`,
  belowLaptop: `(max-width: calc(${theme.size.laptop} - 1px))`,
}


export default theme;
