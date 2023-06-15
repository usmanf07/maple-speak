const COLORS = {
  background: "#181A20",
  primary: "#FFDD00",
  secondary: "#444262",
  tertiary: "#FF7754",
  error: "#EF1010",
  gray: "#1F222A",
  footerGray: "#2a2e38",
  gray2: "#C1C0C8",
  borderGray: "#7a7a7a",
  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
  ip: "192.168.1.4",
};


const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
  varela: "Varela",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
