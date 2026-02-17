// ===============================
// Font Families

import { TextStyle } from "react-native";

// ===============================
export const FontFamily = {
    primary: 'Tracks-Normal',
    secondary: 'OpenSans',
} as const;


// ===============================
// Font Weights
// ===============================
export const FontWeight = {
    regular: '400',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
} as const;


// ===============================
// Font Sizes
// ===============================
export const FontSize = {
    10: 10,
    12: 12,
    14: 14,
    16: 16,
    18: 18,
    20: 20,
    24: 24,
    28: 28,
    32: 32,
    40: 40,
    48: 48,
} as const;


// ===============================
// Line Heights (1.4–1.5 ratio)
// ===============================
export const LineHeight = {
    16: 16,
    18: 18,
    20: 20,
    24: 24,
    28: 28,
    32: 32,
    36: 36,
    42: 42,
    48: 48,
    54: 54,
    64: 64,
} as const;


// ===============================
// Typography Variants
// ===============================
export const Typography = {
    // ---- Body ----
    bodyLarge: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize[16],
        lineHeight: LineHeight[24],
        fontWeight: FontWeight.regular,
    },
    bodyLargeBold: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize[16],
        lineHeight: LineHeight[24],
        fontWeight: FontWeight.bold,
    },

    bodyMedium: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize[14],
        lineHeight: LineHeight[20],
        fontWeight: FontWeight.regular,
    },
    bodyMediumBold: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize[14],
        lineHeight: LineHeight[20],
        fontWeight: FontWeight.bold,
    },
    bodyMediumSemiBold: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize[14],
        lineHeight: LineHeight[20],
        fontWeight: FontWeight.semiBold,
    },

    bodySmall: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize[12],
        lineHeight: LineHeight[18],
        fontWeight: FontWeight.regular,
    },
    bodySmallBold: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize[12],
        lineHeight: LineHeight[18],
        fontWeight: FontWeight.bold,
    },

    bodyTiny: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize[10],
        lineHeight: LineHeight[16],
        fontWeight: FontWeight.regular,
    },
    bodyTinyExtraBold: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize[10],
        lineHeight: LineHeight[16],
        fontWeight: FontWeight.extraBold,
    },

    bodyXLargeBold: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize[18],
        lineHeight: LineHeight[28],
        fontWeight: FontWeight.bold,
    },
    bodyXLargeSemiBold: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize[18],
        lineHeight: LineHeight[28],
        fontWeight: FontWeight.semiBold,
    },

    // ---- Buttons ----
    buttonLarge: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize[16],
        lineHeight: LineHeight[24],
        fontWeight: FontWeight.bold,
    },
    buttonMedium: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize[14],
        lineHeight: LineHeight[20],
        fontWeight: FontWeight.bold,
    },
    buttonSmall: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize[12],
        lineHeight: LineHeight[18],
        fontWeight: FontWeight.bold,
    },

    // ---- Headings ----
    heading1: {
        fontFamily: FontFamily.primary,
        fontSize: FontSize[48],
        lineHeight: LineHeight[64],
    },
    heading2: {
        fontFamily: FontFamily.primary,
        fontSize: FontSize[40],
        lineHeight: LineHeight[54],
    },
    heading3: {
        fontFamily: FontFamily.primary,
        fontSize: FontSize[32],
        lineHeight: LineHeight[42],
    },
    heading4: {
        fontFamily: FontFamily.primary,
        fontSize: FontSize[28],
        lineHeight: LineHeight[36],
    },
    heading5: {
        fontFamily: FontFamily.primary,
        fontSize: FontSize[24],
        lineHeight: LineHeight[32],
    },
    heading6: {
        fontFamily: FontFamily.primary,
        fontSize: FontSize[20],
        lineHeight: LineHeight[28], // adjusted for consistency
    },
} as const satisfies Record<string, TextStyle>;

export type TypographyVariant = keyof typeof Typography;
export default Typography;