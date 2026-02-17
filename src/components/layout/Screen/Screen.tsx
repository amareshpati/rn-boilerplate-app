import React from 'react';
import {
    StyleSheet,
    ViewStyle,
    StyleProp,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { Spacing } from '@/styles/spacing';
import { AppSafeAreaView } from '@/components/base/AppSafeAreaView';
import { AppView } from '@/components/base/AppView';
import { Layouts } from '@/styles';
import { AppScrollView } from '@/components/base/AppScrollView';

interface ScreenProps {
    children: React.ReactNode;

    scrollable?: boolean;
    safeArea?: boolean;

    contentContainerStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;

    paddingHorizontal?: number;
    paddingVertical?: number;
}

export const Screen: React.FC<ScreenProps> = ({
    children,
    scrollable = false,
    safeArea = true,
    contentContainerStyle,
    containerStyle,
    paddingHorizontal = Spacing[16],
    paddingVertical = Spacing[16],
}) => {
    const { theme } = useTheme();

    const Container = safeArea ? AppSafeAreaView : AppView;

    const baseStyle = [
        styles.container,
        {
            backgroundColor: theme.background.primary,
        },
        containerStyle,
    ];

    const contentStyle = [
        {
            paddingHorizontal,
            paddingVertical,
            flexGrow: 1,
        },
        contentContainerStyle,
    ];

    return (
        <Container style={baseStyle}>
            {scrollable ? (
                <AppScrollView
                    contentContainerStyle={contentStyle}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    {children}
                </AppScrollView>
            ) : (
                <AppView style={contentStyle}>{children}</AppView>
            )}
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        ...Layouts.container
    },
    flex: {
        ...Layouts.container
    },
});