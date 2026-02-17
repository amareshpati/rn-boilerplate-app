import React, { useEffect, useRef } from 'react';
import {
    Animated,
    StyleSheet,
    ViewStyle,
    StyleProp,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { AppPressable } from '@/components/base/AppPressable';
import { Layouts } from '@/styles';
import { getShadow } from '@/utils/getShadows';

interface AppToggleProps {
    value: boolean;
    onValueChange: (value: boolean) => void;
    disabled?: boolean;

    size?: 'small' | 'medium' | 'large';
    containerStyle?: StyleProp<ViewStyle>;
}

export const AppToggle: React.FC<AppToggleProps> = ({
    value,
    onValueChange,
    disabled,
    size = 'medium',
    containerStyle,
}) => {
    const { theme } = useTheme();
    const animation = useRef(new Animated.Value(value ? 1 : 0)).current;


    const sizeConfig = {
        small: { width: 40, height: 22, thumb: 18 },
        medium: { width: 50, height: 28, thumb: 24 },
        large: { width: 60, height: 34, thumb: 30 },
    };

    const { width, height, thumb } = sizeConfig[size];

    const padding = 2;
    const translateRange = width - thumb - padding * 2;

    useEffect(() => {
        Animated.timing(animation, {
            toValue: value ? 1 : 0,
            duration: 100,
            useNativeDriver: true,
        }).start();
    }, [value]);

    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, translateRange],
    });

    const trackColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [
            theme.border.light,
            theme.primary.main,
        ],
    });

    return (
        <AppPressable
            onPress={() => !disabled && onValueChange(!value)}
            style={[containerStyle]}
        >
            <Animated.View
                style={[
                    styles.track,
                    {
                        width,
                        height,
                        borderRadius: height / 2,
                        backgroundColor: trackColor,
                        opacity: disabled ? 0.6 : 1,
                        padding,
                    },
                ]}
            >
                <Animated.View
                    style={[
                        getShadow(theme.common.black),
                        {
                            width: thumb,
                            height: thumb,
                            borderRadius: thumb / 2,
                            transform: [{ translateX }],
                            backgroundColor: theme.common.white,
                        },
                    ]}
                />
            </Animated.View>
        </AppPressable>
    );
};

const styles = StyleSheet.create({
    track: {
        ...Layouts.justifyCenter
    },
});