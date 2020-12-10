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
          '@theme': 'src/theme',
          '@types': 'src/types',
          '@context': 'src/context',
          '@utils': 'src/utils',
          '@navigation': 'src/navigation',
          '@components': 'src/components',
          '@icons': 'src/components/assets/icons',
          '@screens': 'src/screens',
        },
      },
    ],
  ],
};
