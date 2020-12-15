import React from 'react';
import { Pressable } from 'react-native';

import { spacing } from 'styles';

import Box from '../Box';
import IconButton from '../IconButton';
import PressableText from '../PressableText';
import StyledText from '../StyledText';

import NumberPadStyle from '../NumberPad/NumberPad.style';

interface INumberPadProps {
  isLogin?: boolean;
  onNumberPress: (number: string) => void;
  onDeletePress: () => void;
  onForgotPress?: () => void;
}

const NumberPad: React.FC<INumberPadProps> = ({
  isLogin,
  onNumberPress,
  onDeletePress,
  onForgotPress,
}) => {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const renderNumbers = () => {
    return numbers.map((num, index) => {
      const isMiddleV = num === '2' || num === '5' || num === '8';
      const isMiddleH = num === '4' || num === '5' || num === '6';
      return (
        <Pressable
          key={index}
          android_ripple={{ radius: 40, borderless: true }}
          onPress={() => onNumberPress(num)}
          style={[
            NumberPadStyle.number,
            {
              marginHorizontal: isMiddleV ? spacing.mH : 0,
              marginVertical: isMiddleH ? spacing.sH : 0,
            },
          ]}
        >
          <StyledText variant="h1">{num}</StyledText>
        </Pressable>
      );
    });
  };

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      height={384}
      flexWrap="wrap"
      style={NumberPadStyle.container}
    >
      {renderNumbers()}
      <Box
        width="100%"
        flexDirection="row"
        alignItems="center"
        justifyContent={isLogin ? 'space-between' : 'flex-end'}
        position="relative"
        style={NumberPadStyle.bottomSectionContainer}
      >
        {isLogin && onForgotPress && (
          <PressableText
            label="Forgot?"
            variant="sublime"
            color="midnightBlue"
            onPress={onForgotPress}
          />
        )}
        <Box position="absolute" left={0} right={0} alignItems="center">
          <Pressable
            android_ripple={{ radius: 40, borderless: true }}
            style={NumberPadStyle.number}
            onPress={() => onNumberPress('0')}
          >
            <StyledText variant="h1">0</StyledText>
          </Pressable>
        </Box>
        <IconButton
          icon="delete"
          color="midnightBlue"
          onPress={onDeletePress}
          accessibilityLabel="delete"
          iconWidth="35"
          iconHeight="35"
        />
      </Box>
    </Box>
  );
};

export default NumberPad;
