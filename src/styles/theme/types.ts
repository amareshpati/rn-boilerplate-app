// theme/types.ts

export interface Theme {
    // Backgrounds
    background: {
        primary: string;     // App background
        secondary: string;   // Cards / sections
        tertiary: string;    // Subtle surfaces
    };

    // Text
    text: {
        primary: string;     // High emphasis
        secondary: string;   // Medium emphasis
        tertiary: string;    // Low emphasis / muted
        inverse: string;     // On dark or brand surfaces
    };

    // Brand colors
    primary: {
        main: string;
        light: string;
        dark: string;
        contrast: string;    // Text on primary
    };

    secondary: {
        main: string;
        light: string;
        dark: string;
        contrast: string;
    };

    // Semantic states (grouped — important)
    status: {
        success: string;
        successBackground: string;

        error: string;
        errorBackground: string;

        warning: string;
        warningBackground: string;

        info: string;
        infoBackground: string;
    };

    // Borders & dividers
    border: {
        light: string;
        main: string;
        strong: string;
    };

    // Cards
    card: {
        background: string;
        border: string;
    };

    // Inputs / forms
    input: {
        background: string;
        border: string;
        placeholder: string;
    };
    common: {
        white: string,
        black: string,
        transparent: string,
    }
}