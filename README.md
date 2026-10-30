# Whollet: React Native Crypto Wallet

A crypto wallet app built with React Native and TypeScript, based on the [Whollet UI Kit](https://www.figma.com/file/pBaexbKyMBWKJbG8YCBxPf/Whollet-UI-Kit-v1.0?node-id=0%3A132) by [whollet.io](https://whollet.io/).

The focus is on the onboarding and authentication experience: a themed component system, onboarding, Firebase email sign-up and login, and a PIN flow. The rest of the app's navigation (wallet, transactions, withdrawals, KYC, profile and security) is wired up with placeholder screens.

> **Status:** a 2021 portfolio project that isn't actively maintained. It targets React Native 0.63.

## Features

- **Onboarding:** a paged slider with Next, Skip and Get Started actions
- **Authentication:** email and password sign-up and login with Firebase Auth, with input validation and the session kept across launches
- **PIN flow:** create, confirm and verify a 4-digit PIN on a custom number pad, stored on the device with AsyncStorage
- **Animations:** animated auth forms and notification banners built with React Native Reanimated
- **Theming:** a type-safe design system built with [Shopify Restyle](https://github.com/Shopify/restyle), with light and dark theme definitions
- **Navigation:** nested stack and bottom-tab navigators covering every flow in the UI kit
- **In-app notifications:** a global notification banner driven by React Context
- **SVG assets:** icons and illustrations converted to typed React components with SVGR

## Tech stack

| Area | Tools |
|---|---|
| Framework | React Native 0.63, TypeScript |
| Navigation | React Navigation 5 (stack and bottom tabs) |
| Styling | Shopify Restyle, custom fonts (Titillium Web) |
| Animation | React Native Reanimated, Gesture Handler |
| Backend | Firebase Auth (`@react-native-firebase`) |
| State | React Context with `useReducer` |
| Tooling | ESLint, Prettier, Jest, SVGR, Babel module resolver |

## Project structure

```
src/
├── components/   # Reusable UI components (inputs, number pad, sliders, notifications…)
├── screens/      # Screens grouped by flow (PreAuth, Wallet, Withdrawal, Profile…)
├── navigation/   # Root, pre-auth, tab and per-flow navigators
├── context/      # App state: auth check, theme, notifications
├── theme/        # Restyle theme: colors, spacing, text variants, light and dark
├── assets/       # Fonts, plus SVG sources for icons and illustrations
└── utils/        # Validation, formatting and hooks
```

## Getting started

### Prerequisites

- Node.js 12 or 14 and Yarn 1. These match the React Native 0.63 toolchain.
- Android Studio, or Xcode with CocoaPods
- A Firebase project with **Email/Password** sign-in enabled

### Setup

```bash
git clone https://github.com/fatihcandev/react-native-crypto-wallet-app.git
cd react-native-crypto-wallet-app
yarn install
cd ios && pod install && cd ..
```

Connect your own Firebase project:

- **Android:** replace `android/app/google-services.json` with your project's file.
- **iOS:** add `GoogleService-Info.plist` to `ios/WholletApp` and call `[FIRApp configure]` in `AppDelegate.m`. See the [React Native Firebase docs](https://rnfirebase.io/#3-ios-setup).

### Run

```bash
yarn start     # Metro bundler
yarn android   # or: yarn ios
```

### Scripts

| Command | Description |
|---|---|
| `yarn lint` | Type-check with `tsc`, then run ESLint |
| `yarn format` | Prettier, then ESLint `--fix` |
| `yarn test` | Jest |
| `yarn svgr-icons` / `yarn svgr-illustrations` | Regenerate React components from the SVG sources |

## Credits

- UI design: [Whollet UI Kit](https://whollet.io/)
- Font: [Titillium Web](https://fonts.google.com/specimen/Titillium+Web)

## License

[MIT](LICENSE)
