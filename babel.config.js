module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@tests': 'src/tests',
          '@assets': 'src/assets',
          '@theme': 'src/theme',
          '@types': 'src/types',
          '@context': 'src/context',
          '@constants': 'src/constants',
          '@utils': 'src/utils',
          '@navigation': 'src/navigation',
          '@components': 'src/components',
          '@screens': 'src/screens',
        },
      },
    ],
  ],
};
