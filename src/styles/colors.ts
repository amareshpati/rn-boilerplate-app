export const colors = {
    // Brand colors with proper scale
    primary: {
        50: '#F2E9FF',
        100: '#DCCBFF',
        200: '#C3A8FF',
        300: '#A97FFF',
        400: '#925CFF',
        500: '#854CE6', // Base brand color
        600: '#6F3FCC',
        700: '#5932B3',
        800: '#432699',
        900: '#2E1A80',
        DEFAULT: '#854CE6', // Shorthand for primary.500
    },

    // Accent colors
    secondary: {
        50: '#F8E6FF',
        100: '#EDBFFF',
        200: '#E199FF',
        300: '#D573FF',
        400: '#CA4DFF',
        500: '#BE1ADB', // Base magenta
        600: '#9F16B8',
        700: '#801295',
        800: '#610E72',
        900: '#420A4F',
        DEFAULT: '#BE1ADB',
    },

    // Neutral/Grayscale (dark theme optimized)
    neutral: {
        50: '#FFFFFF',
        100: '#F0F0F0',
        200: '#F2F3F4',
        300: '#B1B2B3',
        400: '#5C5B5B',
        500: '#48494A',
        600: '#191924',
        700: '#171721',
        800: '#111111',
        900: '#000000',
        DEFAULT: '#48494A',
    },

    // Semantic tokens (reference the scale)
    background: {
        primary: '#090917',    // Darkest
        secondary: '#1C1E27',  // Cards, elevated surfaces
        tertiary: '#171721',   // Alternative surfaces
        elevated: '#191924',   // Modals, popovers
        inverse: '#F2F3F4',    // Light mode fallback
        DEFAULT: '#090917',
    },

    text: {
        primary: '#FFFFFF',    // High emphasis
        secondary: '#B1B2B3',  // Medium emphasis
        tertiary: '#5C5B5B',   // Low emphasis (renamed from muted)
        disabled: '#48494A',   // Disabled state
        inverse: '#111111',    // On light backgrounds
        DEFAULT: '#FFFFFF',
    },

    // Borders & dividers
    border: {
        primary: '#191924',
        secondary: '#171721',
        subtle: '#111111',
        DEFAULT: '#191924',
    },

    // Common (preserved for convenience)
    common: {
        white: '#FFFFFF',
        black: '#000000',
        transparent: 'transparent',
    },
};