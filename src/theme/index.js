const breakpoints = ["40em", "52em", "64em"];
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64];
const colors = {
  tranparant: "transparent",
  baseBg: "#f7f5f9",
  white: "#ffffff",
  primary: "#6979f8",
  secondary: "#808df9",
  disabled: "rgb(8 12 47 / 70%)",
  success: "#00c48c",
  warning: "orange",
  error: "#ff647c",
  card: "white",
  black: "#59626A",
  category: "rgb(208 139 13 / 92%)",
};
const space = [0, 4, 8, 16, 32, 64, 128, 256];
const fonts = {
  body: "Roboto, sans-serif",
  heading: "inherit",
  monospace: "Menlo, monospace",
};
const fontWeights = {
  body: 400,
  heading: 700,
  bold: 700,
};
const lineHeights = {
  body: 1.5,
  heading: 1.25,
};
const shadows = {
  shadow: "0 1px 4px 0 rgba(0, 0, 0, 0.16)",
};
const cards = {
  card: {
    p: 2,
    bg: colors.baseBg,
    boxShadow: shadows.shadow,
  },
};
const buttons = {
  primary: {
    bg: colors.primary,
    color: colors.card,
    cursor: "pointer",
  },
  secondary: {
    bg: colors.secondary,
    color: colors.card,
    cursor: "pointer",
  },
  white: {
    bg: colors.card,
    cursor: "pointer",
    boxShadow: shadows.shadow,
  },
  link: {
    bg: "transparent",
    color: colors.primary,
    cursor: "pointer",
  },
};

const theme = {
  breakpoints,
  buttons,
  cards,
  colors,
  shadows,
  space,
  fonts,
  fontWeights,
  lineHeights,
  fontSizes,
};

export default theme;

// this file just copied and paste from somewhere
