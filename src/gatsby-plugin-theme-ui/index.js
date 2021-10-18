const theme = {
  breakpoints: ["@media (min-width: 400px)"],
  fonts: {
    body: "Rubik",
    heading: "Rubik",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 300,
    heading: 300,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  text: {
    heading1: {
      fontSize: 36,
    },
    heading2: {
      fontSize: [26, 36],
    },
    heading3: {
      fontSize: [22, 22],
      fontWeight: 700,
    },
    paragraph: {
      fontSize: [18],
      color: "blue500",
    },
    frequency: {
      fontSize: [18],
      my: 2,
      color: "blue500",
      ":hover": {
        cursor: "pointer",
        color: "#FFFFFF",
        transform: "scale(1.2) transitionX(5px)",
      },
    },
  },
  colors: {
    text: "#EEEEEE",

    //blues
    blue100: "hsl(246, 80%, 60%)",
    blue200: "hsl(226, 43%, 10%)",
    blue300: "hsl(235, 46%, 20%)",
    blue400: "hsl(235, 45%, 61%)",
    blue500: "hsl(236, 100%, 87%)",

    //work
    red100: "hsl(15, 100%, 70%)",
    //play
    blue600: "hsl(195, 74%, 62%)",
    //study
    red200: "hsl(348, 100%, 68%)",
    //exercise
    green100: "hsl(145, 58%, 55%)",
    //social
    violet100: "hsl(264, 64%, 52%)",
    //self-care
    orange100: "hsl(43, 84%, 65%)",
  },
};

export default theme;
