import React from 'react';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';


export const AppSafeAreaView = ({
    children,
    ...rest
}: SafeAreaViewProps) => {
    return (
        <SafeAreaView style={{ flex: 1 }} {...rest}>
            {children}
        </SafeAreaView>
    );
};