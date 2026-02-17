// theme/themes.ts
import { colors } from '../colors';
import { Theme } from './types';

export const lightTheme: Theme = {
    background: {
        primary: colors.neutral[50],     // App background
        secondary: colors.neutral[100],  // Cards / sections
        tertiary: colors.neutral[200],   // Subtle surfaces
    },

    text: {
        primary: colors.neutral[900],    // High emphasis
        secondary: colors.neutral[600],  // Medium emphasis
        tertiary: colors.neutral[400],   // Low emphasis
        inverse: colors.common.white,    // On dark / brand surfaces
    },

    primary: {
        main: colors.primary[500],       // Brand
        light: colors.primary[400],      // Hover / highlight
        dark: colors.primary[700],       // Pressed / emphasis
        contrast: colors.common.white,   // Text on primary
    },

    secondary: {
        main: colors.secondary[500],     // Accent / CTA
        light: colors.secondary[400],
        dark: colors.secondary[700],
        contrast: colors.common.white,
    },

    status: {
        success: colors.success[600],
        successBackground: colors.success[50],
        error: colors.danger[600],
        errorBackground: colors.danger[50],
        warning: colors.warning[600],
        warningBackground: colors.warning[50],
        info: colors.info[600],
        infoBackground: colors.info[50],
    },

    border: {
        light: colors.neutral[200],      // Subtle dividers
        main: colors.neutral[300],       // Default borders
        strong: colors.neutral[400],     // Emphasized borders
    },

    card: {
        background: colors.common.white,
        border: colors.neutral[200],
    },

    input: {
        background: colors.common.white,
        border: colors.neutral[300],
        placeholder: colors.neutral[400],
    },

    common: {
        white: colors.common.white,
        black: colors.common.black,
        transparent: colors.common.transparent,
    }
};