module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src',

          '@assets': './src/assets',
          '@images': './src/assets/images',
          '@icons': './src/assets/icons',
          '@fonts': './src/assets/fonts',

          '@components': './src/components',
          '@constants': './src/constants',
          '@context': './src/context',
          '@features': './src/features',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',

          '@services': './src/services',
          '@api': './src/services/api',
          '@permissions': './src/services/permissions',

          '@storage': './src/storage',
          '@styles': './src/styles',
          '@types': './src/types',
          '@utils': './src/utils'
        },
      },
    ],
  ],
};