import { ImageName, Images } from '@/assets';
import React from 'react';
import {
    Image,
    ImageProps,
    ImageSourcePropType,
    StyleProp,
    ImageStyle,
} from 'react-native';

interface AppImageProps extends Omit<ImageProps, 'source'> {
    name?: ImageName;
    source?: ImageSourcePropType;
    style?: StyleProp<ImageStyle>;
}

export const AppImage = ({
    name,
    source,
    style,
    ...rest
}: AppImageProps) => {
    const finalSource = source ?? (name ? Images[name] : undefined);

    if (!finalSource) {
        console.warn('AppImage: No source provided');
        return null;
    }

    return <Image source={finalSource} style={style} {...rest} />;
};