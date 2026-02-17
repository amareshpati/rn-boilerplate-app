import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';
import { ThemeProvider } from './provider/ThemeProvider';
import AppSafeAreaProvider from './provider/AppSafeAreaProvider';
import { ErrorBoundary } from './components';

const App = () => {
    return (
        <AppSafeAreaProvider>
            <ThemeProvider>
                <ErrorBoundary>
                    <NavigationContainer>
                        <RootNavigator />
                    </NavigationContainer>
                </ErrorBoundary>
            </ThemeProvider>
        </AppSafeAreaProvider>
    );
}

export default App;