const theme = {
  // colors
  white: '#FFF',
  black: '#555555',
  surfRiderBlue: '#0073be',
  secondaryColor: '#70F9C5',

  // font-sizes - scale: 1.250
  smallerFS: '10px',
  smallFS: '12px',
  defaultFS: '14px',
  biggerFS: '16px',
  landingTitle: '134px',
  mainTitleFS: '78px',
  secondaryFS: '62px',
  thirdFS: '50px',
  fourthFS: '20px',
  // font-family -
  defaultFF: "'Montserrat', sans-serif",
  secondaryFF: "'Bebas Neue', sans-serif",

  // menu
  menuHeight: '50px',
  ribbonWidth: '90px',

  // Screen sizes
  maxWidth: '1080px',
  desktopHeaderHeight: 80,

  size: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  },

  // spacing
  spacing: (x) => `${x * 14}px`
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
  belowLaptop: `(max-width: calc(${theme.size.laptop} - 1px))`
};

export default theme;
