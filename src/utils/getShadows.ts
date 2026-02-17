import { Platform, ViewStyle } from 'react-native';

export const getShadow = (shadowColor: string, elevation = 4): ViewStyle => {
    return Platform.select({
        ios: {
            shadowColor,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
        },
        android: {
            elevation,
            shadowColor,
        },
    }) as ViewStyle;
};