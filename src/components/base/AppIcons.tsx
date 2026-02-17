import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { IconName, Icons } from '@/assets/icons';

interface AppIconProps extends SvgProps {
    name?: IconName;
    Icon?: React.ComponentType<SvgProps>;
    size?: number;
    style?: StyleProp<ViewStyle>;
}

export const AppIcon = ({
    name,
    Icon,
    size = 24,
    width,
    height,
    style,
    ...rest
}: AppIconProps) => {
    const IconComponent = Icon ?? (name ? Icons[name] : undefined);

    if (!IconComponent) {
        console.warn('AppIcon: No icon provided');
        return null;
    }

    return (
        <IconComponent
            width={width ?? size}
            height={height ?? size}
            style={style}
            {...rest}
        />
    );
};