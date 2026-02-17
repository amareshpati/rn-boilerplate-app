import React from 'react';
import {
    Pressable,
    PressableProps,
    StyleProp,
    ViewStyle,
} from 'react-native';

interface AppPressableProps extends PressableProps {
    style?: StyleProp<ViewStyle>;
    pressedOpacity?: number;
    disabledOpacity?: number;
}

export const AppPressable: React.FC<AppPressableProps> = ({
    children,
    style,
    pressedOpacity = 0.6,
    disabledOpacity = 0.4,
    disabled,
    ...rest
}) => {
    return (
        <Pressable
            disabled={disabled}
            style={({ pressed }) => [
                style,
                pressed && !disabled && { opacity: pressedOpacity },
                disabled && { opacity: disabledOpacity },
            ]}
            {...rest}
        >
            {children}
        </Pressable>
    );
};
