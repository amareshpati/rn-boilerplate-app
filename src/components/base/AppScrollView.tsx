import { Layouts } from '@/styles';
import React from 'react';
import {
    ScrollView,
    ScrollViewProps,
    StyleSheet,
} from 'react-native';

export const AppScrollView: React.FC<ScrollViewProps> = ({
    children,
    contentContainerStyle,
    ...rest
}) => {
    return (
        <ScrollView
            {...rest}
            style={styles.container}
            contentContainerStyle={contentContainerStyle}
        >
            {children}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        ...Layouts.container
    },
});