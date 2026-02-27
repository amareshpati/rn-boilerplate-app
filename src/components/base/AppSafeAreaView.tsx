import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';


export const AppSafeAreaView = ({
    children,
    ...rest
}: SafeAreaViewProps) => {
    return (
        <SafeAreaView style={styles.container} {...rest}>
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});