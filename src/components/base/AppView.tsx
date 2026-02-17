import React from 'react';
import { View, ViewProps } from 'react-native';

export const AppView: React.FC<ViewProps> = ({
    children,
    ...rest
}) => {
    return <View {...rest}>{children}</View>;
};