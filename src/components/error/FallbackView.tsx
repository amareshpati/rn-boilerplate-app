import React from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from '@hooks/useTheme';
import { AppText } from '../base/AppText';
import { Layouts, Spacing } from '@/styles';
import { Screen } from '../layout/Screen/Screen';
import { AppButton } from '../ui/AppButton/AppButton';

interface Props {
    error?: Error;
    onRetry: () => void;
}

export const FallbackView = ({ error, onRetry }: Props) => {
    const { theme } = useTheme();
    return (
        <Screen
            contentContainerStyle={[
                styles.container,
                { backgroundColor: theme.background.primary },
            ]}
        >
            {__DEV__ && (
                <AppText variant='bodyLarge'>
                    {error?.message}
                </AppText>
            )}
            <AppButton
                title='Retry'
                size='large'
                onPress={onRetry}
                containerStyle={{
                    marginVertical: Spacing[16],
                    backgroundColor: theme.status.errorBackground
                }}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        ...Layouts.container,
        ...Layouts.centered,
        padding: Spacing[24],
    },
});