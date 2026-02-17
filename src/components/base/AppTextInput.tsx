import { useTheme } from '@/hooks/useTheme';
import { Spacing } from '@/styles';
import React from 'react';
import {
    TextInput,
    TextInputProps,
    StyleSheet,
} from 'react-native';

export const AppTextInput = (props: TextInputProps) => {
    const { theme } = useTheme();
    return (
        <TextInput
            placeholderTextColor={theme.text.tertiary}
            style={styles.input}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        paddingVertical: Spacing[12],
        paddingHorizontal: Spacing[16],
    },
});