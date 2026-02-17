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

    danger: {
        50: '#FEEAEA',
        100: '#FBCFCF',
        200: '#F8B1B1',
        300: '#F38A8A',
        400: '#EE6464',
        500: '#E53935', // Base error
        600: '#C62828',
        700: '#B71C1C',
        800: '#8E1616',
        900: '#661010',
        DEFAULT: '#E53935',
    },

    warning: {
        50: '#FFFBEB',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#FCD34D',
        400: '#FBBF24',
        500: '#F59E0B', // Base warning
        600: '#D97706',
        700: '#B45309',
        800: '#92400E',
        900: '#78350F',
        DEFAULT: '#F59E0B',
    },

    success: {
        50: '#E8F5E9',
        100: '#C8E6C9',
        200: '#A5D6A7',
        300: '#81C784',
        400: '#66BB6A',
        500: '#2E7D32', // Base success
        600: '#1B5E20',
        700: '#145A1F',
        800: '#0F3E15',
        900: '#0A2A0E',
        DEFAULT: '#2E7D32',
    },


    info: {
        50: '#E3F2FD',
        100: '#BBDEFB',
        200: '#90CAF9',
        300: '#64B5F6',
        400: '#42A5F5',
        500: '#2196F3', // Base info
        600: '#1E88E5',
        700: '#1976D2',
        800: '#1565C0',
        900: '#0D47A1',
        DEFAULT: '#2196F3',
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