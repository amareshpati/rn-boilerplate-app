import React, {
    ReactNode,
    useMemo,
    useState,
    useCallback,
} from 'react';
import { useColorScheme } from 'react-native';
import { getTheme } from '@styles/theme';
import { ThemeContext } from '@context/ThemeContext';
import { Theme } from '@styles/theme/types';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const rawScheme = useColorScheme();

    const systemScheme: 'light' | 'dark' =
        rawScheme === 'dark' ? 'dark' : 'light';


    const [themeMode, setThemeMode] = useState<ThemeMode>('system');


    const scheme: 'light' | 'dark' =
        themeMode === 'system'
            ? systemScheme
            : themeMode;


    const theme: Theme = useMemo(
        () => getTheme(scheme),
        [scheme]
    );


    const toggleTheme = useCallback(() => {
        setThemeMode(prev =>
            prev === 'dark' ? 'light' : 'dark'
        );
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                scheme,
                themeMode,
                setThemeMode,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};