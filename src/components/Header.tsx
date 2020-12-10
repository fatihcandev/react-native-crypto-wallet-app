import React from 'react';

import Box from './Box';
import IconButton from './IconButton';
import StyledText from './StyledText';

type IHeaderProps = {
  title: string;
  colorMode: 'light' | 'dark';
  rightSideIcon?: string;
  onRightSideIconPress?: () => void;
  info?: string;
  navigation: any;
};

const Header: React.FC<IHeaderProps> = ({
  title,
  colorMode,
  rightSideIcon,
  onRightSideIconPress,
  info,
  navigation,
}) => {
  const color = colorMode === 'light' ? 'white' : 'midnightBlue';
  return (
    <Box marginTop="xl">
      <Box flexDirection="row" alignItems="center" justifyContent="center" position="relative">
        {navigation.canGoBack() && (
          <Box position="absolute" left={0}>
            <IconButton
              icon="chevronLeft"
              accessibilityLabel="Go back"
              onPress={() => navigation.goBack()}
              {...{ color }}
            />
          </Box>
        )}
        <StyledText variant="h3" {...{ color }}>
          {title}
        </StyledText>
        {rightSideIcon && onRightSideIconPress && (
          <Box position="absolute" right={0}>
            <IconButton
              icon={rightSideIcon}
              accessibilityLabel="Go back"
              onPress={onRightSideIconPress}
              {...{ color }}
            />
          </Box>
        )}
      </Box>
      {info && (
        <StyledText variant="paragraph" textAlign="center">
          {info}
        </StyledText>
      )}
    </Box>
  );
};

export default Header;
