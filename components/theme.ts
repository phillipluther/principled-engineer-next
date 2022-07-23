import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  global: {
    body: {
      lineHeight: 1.6,
    },
  },
  colors: {
    gray: {
      100: '#FFFFEF',
      200: '#E0E0D0',
      300: '#C2C2B2',
      400: '#A3A393',
      500: '#858575',
      600: '#666656',
      700: '#474737',
      800: '#292919',
      900: '#0A0A00',
    },
    brand: {
      // 100: '#FFFFD3',
      // 200: '#FFFBA0',
      // 300: '#FFC86D',
      // 400: '#D4953A',
      // 500: '#BB7C21',
      // 600: '#A16207',
      // 700: '#884900',
      // 800: '#6E2F00',
      // 900: '#551600',
      100: '#FFFFEF',
      200: '#E0E0D0',
      300: '#C2C2B2',
      400: '#A3A393',
      500: '#858575',
      600: '#666656',
      700: '#474737',
      800: '#292919',
      900: '#0A0A00',
    },
  },
  components: {
    Container: {
      sizes: {
        sm: {
          width: '100%',
          maxWidth: '768px',
        },
        md: {
          width: '100%',
          maxWidth: '992px',
        },
        lg: {
          width: '100%',
          maxWidth: '1280px',
        },
      },
    },
  },
  fonts: {
    heading: `'Playfair Display', serif`,
    body: `'Merriweather', serif`,
  },
  space: {
    // scaling up by 1.618 from 4px; doesn't step on existing Chakra scale < 96;
    // also moves away from using relative units for spacing (margins/paddings/etc.)
    // so that text-zoom is preserved as a functionality
    100: '2px',
    200: '4px',
    300: '6px',
    400: '10px',
    500: '17px',
    600: '27px',
    700: '44px',
    800: '72px',
    900: '116px',
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
    '2xl': '1536px',
  },
  layerStyles: {
    textBlock: {
      lineHeight: '1.618',
      '& p, & h2, & h3, & h4, & h5': {
        marginBottom: '1.618rem',
      },
    },
  },
  textStyles: {
    navLink: {
      color: 'gray.600',
      '&:hover': {
        color: 'gray.900',
        textDecoration: 'underline',
      },
    },
    navLinkDark: {
      color: 'gray.200',
      '&:hover': {
        color: 'gray.100',
        textDecoration: 'underline',
      },
    },
  },
});

export default theme;
