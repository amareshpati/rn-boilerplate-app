import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { AppPressable } from '@components/base/AppPressable';
import { AppText } from '@components/base/AppText';
import { useTheme } from '@/hooks/useTheme';
import { TypographyVariant } from '@styles/typography';
import { AppView } from '@/components/base/AppView';
import { Layouts, Spacing } from '@/styles';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonStyleType = 'default' | 'outline' | 'ghost';

interface AppButtonProps {
    title: string;
    onPress?: () => void;

    buttonStyle?: ButtonStyleType;
    size?: ButtonSize;

    primary?: boolean;
    secondary?: boolean;
    link?: boolean;

    disabled?: boolean;
    isLoading?: boolean;


    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
}

export const AppButton: React.FC<AppButtonProps> = ({
    title,
    onPress,

    buttonStyle = 'default',
    size = 'medium',

    primary,
    secondary,
    link,

    disabled,
    isLoading,

    containerStyle,
    textStyle,
}) => {
    const { theme } = useTheme();

    const sizeConfig: Record<
        ButtonSize,
        {
            paddingVertical: number;
            paddingHorizontal: number;
            textVariant: TypographyVariant;
        }
    > = {
        small: {
            paddingVertical: Spacing[8],
            paddingHorizontal: Spacing[16],
            textVariant: 'buttonSmall',
        },
        medium: {
            paddingVertical: Spacing[8],
            paddingHorizontal: Spacing[20],
            textVariant: 'buttonMedium',
        },
        large: {
            paddingVertical: Spacing[8],
            paddingHorizontal: Spacing[24],
            textVariant: 'buttonLarge',
        },
    };

    const { paddingVertical, paddingHorizontal, textVariant } =
        sizeConfig[size];


    let backgroundColor = theme.primary.main;
    let textColor = theme.primary.contrast;
    let borderColor = theme.common.transparent;

    if (secondary) {
        backgroundColor = theme.secondary.main;
        textColor = theme.secondary.contrast;
    }

    if (link) {
        backgroundColor = theme.common.transparent;
        textColor = theme.primary.main;
    }

    if (buttonStyle === 'outline') {
        backgroundColor = theme.common.transparent;
        borderColor = primary
            ? theme.primary.main
            : secondary
                ? theme.secondary.main
                : theme.border.main;

        textColor = borderColor;
    }

    if (buttonStyle === 'ghost') {
        backgroundColor = theme.common.transparent;
        textColor = primary
            ? theme.primary.main
            : secondary
                ? theme.secondary.main
                : theme.text.primary;
    }

    if (disabled) {
        backgroundColor = theme.border.main;
        textColor = theme.text.tertiary;
    }

    return (
        <AppPressable
            onPress={onPress}
            disabled={disabled || isLoading}
            style={[
                styles.container,
                {
                    paddingVertical,
                    paddingHorizontal,
                    backgroundColor,
                    borderColor,
                    borderWidth:
                        borderColor !== theme.common.transparent ? 1 : 0,
                    opacity: disabled ? 0.6 : 1,
                },
                containerStyle,
            ]}
        >
            {isLoading ? (
                <ActivityIndicator color={textColor} />
            ) : (
                <AppView style={styles.content}>

                    {title && (
                        <AppText
                            variant={textVariant}
                            style={[{ color: textColor }, textStyle]}
                        >
                            {title}
                        </AppText>
                    )}

                </AppView>
            )}
        </AppPressable>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: Spacing[8],
        ...Layouts.centered
    },
    content: {
        ...Layouts.flexRow,
        ...Layouts.alignCenter
    },
    icon: {
        marginHorizontal: Spacing[4],
    },
});