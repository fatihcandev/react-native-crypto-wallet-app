import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Box from '../Box';
import IconButton from '../IconButton';
import StyledText from '../StyledText';

import HeaderStyle from './Header.style';

type IHeaderProps = {
  title: string;
  subtitle?: string;
  colorMode?: 'light' | 'dark';
  rightSideIcon?: string;
  onRightSideIconPress?: () => void;
};

const Header: React.FC<IHeaderProps> = ({
  title,
  subtitle,
  colorMode = 'dark',
  rightSideIcon,
  onRightSideIconPress,
}) => {
  const navigation = useNavigation();
  const color = colorMode === 'light' ? 'white' : 'midnightBlue';
  return (
    <View style={HeaderStyle.container}>
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
    </View>
  );
};

export default Header;
