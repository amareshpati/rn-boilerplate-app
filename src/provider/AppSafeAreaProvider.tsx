import React, { ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type Props = {
    children: ReactNode;
};

const AppSafeAreaProvider = ({ children }: Props) => {
    return (
        <SafeAreaProvider>
            {children}
        </SafeAreaProvider>
    );
};

export default AppSafeAreaProvider;