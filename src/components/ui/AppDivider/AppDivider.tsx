import React from 'react';
import {
    StyleSheet,
    ViewStyle,
    StyleProp,
    DimensionValue,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { AppView } from '@/components/base/AppView';

type DividerVariant = 'strong' | 'main' | 'light';

interface AppDividerProps {
    thickness?: number;
    variant?: DividerVariant;
    vertical?: boolean;
    length?: DimensionValue;
    style?: StyleProp<ViewStyle>;
}

export const AppDivider: React.FC<AppDividerProps> = ({
    thickness = StyleSheet.hairlineWidth,
    variant = 'main',
    vertical = false,
    length,
    style,
}) => {
    const { theme } = useTheme();

    const dividerStyle: ViewStyle = vertical
        ? {
            width: thickness,
            height: length ?? '100%',
        }
        : {
            height: thickness,
            width: length ?? '100%',
        };

    const borderColor = theme.border[variant];

    return (
        <AppView
            style={[
                dividerStyle,
                { backgroundColor: borderColor },
                style,
            ]}
        />
    );
};