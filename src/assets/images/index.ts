export const Images = {
    test: require('@images/common/testimage.jpg'),
    test2: require('@images/common/testimage2.jpg'),
} as const;

export type ImageName = keyof typeof Images;