import { ColorSchemeName } from 'react-native';

import { darkTheme } from './dark';
import { lightTheme } from './light';
import { Theme } from './types';

export const getTheme = (scheme: ColorSchemeName): Theme => {
    if (scheme === 'dark') {
        return darkTheme;
    }
    return lightTheme;
};