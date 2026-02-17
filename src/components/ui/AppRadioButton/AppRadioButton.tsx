import React, { useEffect, useRef } from 'react';
import {
    Animated,
    StyleSheet,
    ViewStyle,
    StyleProp,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { AppPressable } from '@/components/base/AppPressable';
import { AppView } from '@/components/base/AppView';

interface AppRadioButtonProps {
    value: boolean;
    onSelect: () => void;
    disabled?: boolean;

    size?: 'small' | 'medium' | 'large';
    containerStyle?: StyleProp<ViewStyle>;
}

export const AppRadioButton: React.FC<AppRadioButtonProps> = ({
    value,
    onSelect,
    disabled,
    size = 'medium',
    containerStyle,
}) => {
    const { theme } = useTheme();
    const animation = useRef(new Animated.Value(value ? 1 : 0)).current;


    const sizeConfig = {
        small: 18,
        medium: 22,
        large: 28,
    };

    const outerSize = sizeConfig[size];

    // Inner dot scales proportionally
    const innerSize = outerSize * 0.55;
    const borderWidth = outerSize * 0.08;


    useEffect(() => {
        Animated.timing(animation, {
            toValue: value ? 1 : 0,
            duration: 100,
            useNativeDriver: true,
        }).start();
    }, [value]);

    const scale = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0.5, 1],
    });

    const opacity = animation;

    return (
        <AppPressable
            onPress={() => !disabled && onSelect()}
            style={containerStyle}
        >
            <AppView
                style={[
                    styles.outer,
                    {
                        width: outerSize,
                        height: outerSize,
                        borderRadius: outerSize / 2,
                        borderWidth,
                        borderColor: value
                            ? theme.primary.main
                            : theme.border.main,
                        opacity: disabled ? 0.6 : 1,
                    },
                ]}
            >
                <Animated.View
                    style={{
                        transform: [{ scale }],
                        opacity,
                    }}
                >
                    <AppView
                        style={{
                            width: innerSize,
                            height: innerSize,
                            borderRadius: innerSize / 2,
                            backgroundColor: theme.primary.main,
                        }}
                    />
                </Animated.View>
            </AppView>
        </AppPressable>
    );
};

const styles = StyleSheet.create({
    outer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});