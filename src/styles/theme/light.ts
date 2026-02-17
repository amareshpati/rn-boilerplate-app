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
        success: colors.primary[500],    // Reuse brand (clean + consistent)
        error: colors.secondary[500],    // Magenta for destructive
        warning: colors.secondary[400],  // Softer accent
        info: colors.primary[400],
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
};