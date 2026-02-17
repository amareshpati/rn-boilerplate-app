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
        success: colors.success[400],
        successBackground: colors.success[900],
        error: colors.danger[400],
        errorBackground: colors.danger[900],
        warning: colors.warning[400],
        warningBackground: colors.warning[900],
        info: colors.info[400],
        infoBackground: colors.info[900],
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

    common: {
        white: colors.common.white,
        black: colors.common.black,
        transparent: colors.common.transparent,
    }
};