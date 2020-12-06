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
  textVariants: {
    h1: {
      fontFamily: 'TitilliumWeb-Bold',
      fontSize: 36,
      lineHeight: 56,
    },
    h2: {
      fontFamily: 'TitilliumWeb-SemiBold',
      fontSize: 32,
      lineHeight: 32,
    },
    h3: {
      fontFamily: 'TitilliumWeb-SemiBold',
      fontSize: 26,
      lineHeight: 32,
    },
    sublime: {
      fontFamily: 'TitilliumWeb-Regular',
      fontSize: 19,
      lineHeight: 24,
    },
    paragraph: {
      fontFamily: 'TitilliumWeb-Regular',
      fontSize: 15,
      lineHeight: 24,
    },
    link: {
      fontFamily: 'TitilliumWeb-SemiBold',
      fontSize: 15,
      lineHeight: 24,
    },
    fineprint: {
      fontFamily: 'TitilliumWeb-SemiBold',
      fontSize: 13,
      lineHeight: 24,
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export default theme;
