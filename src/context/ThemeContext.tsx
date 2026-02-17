import React, {
  createContext,
  useContext,
  useMemo,
  ReactNode,
} from 'react';
import { useColorScheme, ColorSchemeName } from 'react-native';
import { Theme } from '../styles/theme/types';
import { getTheme } from '../styles/theme';


interface ThemeContextValue {
  theme: Theme;
  scheme: ColorSchemeName;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const scheme = useColorScheme(); // 'light' | 'dark' | null

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

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useTheme must be used within a ThemeProvider'
    );
  }

  return context;
};