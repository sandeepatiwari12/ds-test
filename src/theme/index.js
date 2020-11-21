export default {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
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
    category: "rgb(208 139 13 / 92%)"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: "Roboto, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    shadow: "0 1px 4px 0 rgba(0, 0, 0, 0.16)",
  },
  variants: {
    card: {
      p: 2,
      bg: "baseBg",
      boxShadow: "shadow",
    },
    navBar: {
      bg: "primary",
      boxShadow: "shadow",
      p: 10,
      color: "white",
      alignItems: "center",
    },
    title: {
      p: 5,
      fontSize: "32px",
      lineHeight: "heading",
    },
  },
  text: {},
  buttons: {
    primary: {
      bg: "primary",
      color: "card",
      cursor: "pointer",
    },
    secondary: {
      bg: "secondary",
      color: "card",
      cursor: "pointer",
    },
    white: {
      bg: "card",
      cursor: "pointer",
      boxShadow: "shadow",
    },
    link: {
      bg: "transparent",
      color: "primary",
      cursor: "pointer",
    },
  },
};
