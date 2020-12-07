import React, { useContext } from 'react';
import { ThemeProvider } from '@shopify/restyle';

import { darkTheme, theme } from 'theme';
import { AppContext } from 'context';

const DarkThemeProvider: React.FC = ({ children }) => {
  const { state } = useContext(AppContext);

  return <ThemeProvider theme={state.darkMode ? darkTheme : theme}>{children}</ThemeProvider>;
};

export default DarkThemeProvider;
