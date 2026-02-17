import { createContext } from 'react';
import { ColorSchemeName } from 'react-native';
import { Theme } from '@styles/theme/types';

export interface ThemeContextValue {
  theme: Theme;
  scheme: ColorSchemeName;
}

export const ThemeContext = createContext<
  ThemeContextValue | undefined
>(undefined);