import React, { memo } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import Typography, { TypographyVariant } from '@styles/typography';
import { useTheme } from '@hooks/useTheme';

interface AppTextProps extends RNTextProps {
    variant?: TypographyVariant;
    color?: string;
}

export const AppText = ({
    variant = 'bodyMedium',
    color,
    style,
    ...rest
}: AppTextProps) => {
    const { theme } = useTheme();
    return (
        <RNText
            {...rest}
            allowFontScaling={false}
            style={[
                Typography[variant],
                { color: color ?? theme.text.primary },
                style,
            ]}
        />
    );
};

