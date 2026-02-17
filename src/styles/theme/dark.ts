// theme/themes.ts
import { colors } from '../colors';
import { Theme } from './types';

export const darkTheme: Theme = {
    background: {
        primary: colors.background.primary,    // #090917
        secondary: colors.background.secondary, // #1C1E27
        tertiary: colors.background.tertiary,   // #171721
    },

    text: {
        primary: colors.text.primary,     // #FFFFFF
        secondary: colors.text.secondary, // #B1B2B3
        tertiary: colors.text.tertiary,   // #5C5B5B
        inverse: colors.text.inverse,     // #111111
    },

    primary: {
        main: colors.primary[500],        // Brand purple
        light: colors.primary[400],
        dark: colors.primary[700],
        contrast: colors.common.white,
    },

    secondary: {
        main: colors.secondary[500],      // Magenta accent
        light: colors.secondary[400],
        dark: colors.secondary[700],
        contrast: colors.common.white,
    },

    status: {
        success: colors.primary[400],     // Softer on dark
        error: colors.secondary[500],
        warning: colors.secondary[400],
        info: colors.primary[300],
    },

    border: {
        light: colors.border.subtle,      // Very subtle dividers
        main: colors.border.primary,
        strong: colors.border.secondary,
    },

    card: {
        background: colors.background.secondary,
        border: colors.border.primary,
    },

    input: {
        background: colors.background.tertiary,
        border: colors.border.secondary,
        placeholder: colors.text.tertiary,
    },
};