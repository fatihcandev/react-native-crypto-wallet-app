import React, { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { Easing, useValue } from 'react-native-reanimated';

import { AppContext, CLEAR_NOTIFICATION } from 'context';
import { INotification } from 'types';

import Box from './Box';
import AnimatedBox from './AnimatedBox';
import Icon from './Icon';
import StyledText from './StyledText';

const Notification: React.FC<INotification> = ({ type, message }) => {
  const opacity = useValue(0);
  const { dispatch } = useContext(AppContext);
  const { timing } = Animated;

  const animConfig = {
    duration: 300,
    easing: Easing.inOut(Easing.ease),
  };

  useEffect(() => {
    timing(opacity, { ...animConfig, toValue: 1 }).start();
  }, [animConfig, opacity, timing]);

  useEffect(() => {
    const fade = setTimeout(() => {
      timing(opacity, { ...animConfig, toValue: 0 }).start(({ finished }) => {
        if (finished) {
          dispatch({
            type: CLEAR_NOTIFICATION,
          });
        }
      });
    }, 2000);

    return () => {
      clearTimeout(fade);
    };
  }, [animConfig, dispatch, opacity, timing]);

  return (
    <SafeAreaView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <AnimatedBox
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        height={56}
        paddingHorizontal="m"
        position="absolute"
        top={16}
        left={16}
        right={16}
        backgroundColor="toast"
        borderRadius="full"
        {...{ opacity }}
      >
        <Box flexDirection="row" alignItems="center">
          <Icon name={type!} />
          <StyledText variant="label" color="toastText" marginLeft="s">
            {message}
          </StyledText>
        </Box>
        <Icon name="x" color="toastText" />
      </AnimatedBox>
    </SafeAreaView>
  );
};

export default Notification;
