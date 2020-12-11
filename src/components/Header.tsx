import React from 'react';

import Box from './Box';
import IconButton from './IconButton';
import StyledText from './StyledText';

type IHeaderProps = {
  title: string;
  subtitle?: string;
  colorMode: 'light' | 'dark';
  rightSideIcon?: string;
  onRightSideIconPress?: () => void;
  navigation: any;
};

const Header: React.FC<IHeaderProps> = ({
  title,
  subtitle,
  colorMode,
  rightSideIcon,
  onRightSideIconPress,
  navigation,
}) => {
  const color = colorMode === 'light' ? 'white' : 'midnightBlue';
  return (
    <Box paddingTop="s" paddingHorizontal="m">
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
      {subtitle && (
        <StyledText variant="paragraph" textAlign="center">
          {subtitle}
        </StyledText>
      )}
    </Box>
  );
};

export default Header;
