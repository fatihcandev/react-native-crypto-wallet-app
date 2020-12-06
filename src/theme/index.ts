import { createTheme } from '@shopify/restyle';

const theme = createTheme({
  colors: {
    white: '#FFFFFF',
    primaryBlue: '#347AF0',
    green: '#75BF72',
    red: '#DF5060',
    yellow: '#FDB32A',
    midnightBlue: '#0D1F3C',
    darkGray: '#3D4C63',
    gray: '#B5BBC9',
    lightGray: '#CFD2D8',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {},
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export default theme;
