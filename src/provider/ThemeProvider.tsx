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
import { getString, setString, STORAGE_KEYS } from '@/storage';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const rawScheme = useColorScheme();

    const systemScheme: 'light' | 'dark' =
        rawScheme === 'dark' ? 'dark' : 'light';

    // Rehydrate theme mode from storage on first render
    const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
        const stored = getString(STORAGE_KEYS.THEME_MODE);
        if (stored === 'light' || stored === 'dark' || stored === 'system') {
            return stored;
        }
        return 'system';
    });

    const scheme: 'light' | 'dark' =
        themeMode === 'system'
            ? systemScheme
            : themeMode;

    const theme: Theme = useMemo(
        () => getTheme(scheme),
        [scheme]
    );

    // Persist whenever theme mode changes
    const setThemeMode = useCallback((mode: ThemeMode) => {
        setThemeModeState(mode);
        setString(STORAGE_KEYS.THEME_MODE, mode);
    }, []);

    const toggleTheme = useCallback(() => {
        setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
    }, [themeMode, setThemeMode]);

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