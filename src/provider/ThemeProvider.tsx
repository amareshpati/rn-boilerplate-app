import React, { ReactNode, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { getTheme } from '@styles/theme';
import { ThemeContext } from '@context/ThemeContext';


interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const scheme = useColorScheme();

    const theme = useMemo(
        () => getTheme(scheme),
        [scheme]
    );

    return (
        <ThemeContext.Provider value={{ theme, scheme }}>
            {children}
        </ThemeContext.Provider>
    );
};