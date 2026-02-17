import React, { useEffect, useRef } from 'react';
import {
    Animated,
    StyleSheet,
    ViewStyle,
    StyleProp,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { Layouts } from '@/styles';
import { AppPressable } from '@/components/base/AppPressable';
import { AppView } from '@/components/base/AppView';


interface AppCheckBoxProps {
    value: boolean;
    onValueChange: (value: boolean) => void;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    containerStyle?: StyleProp<ViewStyle>;
    boxStyle?: StyleProp<ViewStyle>;
}

export const AppCheckBox: React.FC<AppCheckBoxProps> = ({
    value,
    onValueChange,
    disabled,
    size = 'medium',
    containerStyle,
    boxStyle
}) => {
    const { theme } = useTheme();
    const animation = useRef(new Animated.Value(value ? 1 : 0)).current;

    const sizeConfig = {
        small: 18,
        medium: 22,
        large: 28,
    };

    const boxSize = sizeConfig[size];

    // Tick proportional sizing
    const tickWidth = boxSize * 0.5;
    const tickHeight = boxSize * 0.28;
    const tickThickness = Math.max(2, boxSize * 0.08);


    useEffect(() => {
        Animated.timing(animation, {
            toValue: value ? 1 : 0,
            duration: 100,
            useNativeDriver: true,
        }).start();
    }, [value]);

    const scale = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0.6, 1],
    });

    const opacity = animation;

    return (
        <AppPressable
            onPress={() => !disabled && onValueChange(!value)}
            style={containerStyle}
        >
            <AppView
                style={[
                    styles.box,
                    {
                        width: boxSize,
                        height: boxSize,
                        borderRadius: boxSize * 0.2,
                        borderColor: value
                            ? theme.primary.main
                            : theme.border.main,
                        backgroundColor: value
                            ? theme.primary.main
                            : theme.common.transparent,
                        borderWidth: boxSize * 0.08,
                        opacity: disabled ? 0.6 : 1,
                    },
                    boxStyle,
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
                            width: tickWidth,
                            height: tickHeight,
                            borderLeftWidth: tickThickness,
                            borderBottomWidth: tickThickness,
                            borderColor: theme.primary.contrast,
                            transform: [{ rotate: '-45deg' }],
                        }}
                    />
                </Animated.View>
            </AppView>
        </AppPressable>
    );
};

const styles = StyleSheet.create({
    box: {
        ...Layouts.centered
    },
});