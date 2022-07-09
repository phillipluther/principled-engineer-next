import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
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
        lg: {
          width: '100%',
          maxWidth: '1280px',
        },
      },
    },
  },
  fonts: {
    heading: `'Merriweather', serif`,
    body: `'Merriweather', serif`,
  },
  space: {
    // scaling up by 1.618 from 4px; doesn't step on existing Chakra scale < 96
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
    padded: {
      padding: {
        base: '600',
        md: '700',
      },
    },
    paddedX: {
      paddingX: {
        base: '600',
        md: '700',
      },
      paddingY: 0,
    },
    paddedY: {
      paddingX: 0,
      paddingY: {
        base: '600',
        md: '700',
      },
    },
    textBlock: {
      lineHeight: '6',
      '& p': {
        marginBottom: '1.618rem',
      },
    },
  },
  textStyles: {
    link: {
      color: 'brand.700',
      '&:hover': {
        color: 'brand.900',
      },
    },
  },
});

export default theme;
