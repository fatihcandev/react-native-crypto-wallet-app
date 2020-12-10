import React, { useRef } from 'react';
import { Dimensions, FlatList } from 'react-native';

import { onboardingSliderData } from 'data';
import OnboardingSliderItem from './OnboardingSliderItem';
import Box from './Box';
import StyledPressable from './StyledPressable';
import StyledText from './StyledText';
import StyledButton from './StyledButton';

interface IOnboardingSliderProps {
  onGetStartedPress: () => void;
}

const OnboardingSlider: React.FC<IOnboardingSliderProps> = ({ onGetStartedPress }) => {
  const ref = useRef<FlatList>(null);
  const { width } = Dimensions.get('window');

  const handleNextPress = (index: number) => {
    console.log(index);
    ref.current?.scrollToIndex({
      index,
      animated: true,
    });
  };

  const handleSkipPress = () => {
    ref.current?.scrollToIndex({
      index: 3,
      animated: true,
    });
  };

  const handleNextOrGetStarted = (isLast: boolean, index: number) => {
    if (isLast) {
      onGetStartedPress();
    } else {
      handleNextPress(index);
    }
  };

  return (
    <>
      <FlatList
        {...{ ref }}
        getItemLayout={(_, index) => ({ length: width * 4, offset: width * (index + 1), index })}
        snapToInterval={width}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        data={onboardingSliderData}
        renderItem={({ item, index }) => {
          const isLast = index === 3;
          const { header, description, illustration } = item;
          return (
            <>
              <OnboardingSliderItem {...{ header, description, illustration }} index={index + 1} />
              <Box position="absolute" bottom={60} left={0} right={0} alignItems="center">
                <StyledButton
                  variant={isLast ? 'primary' : 'ghost'}
                  label={isLast ? "Let's get started" : 'Next Step'}
                  onPress={() => handleNextOrGetStarted(isLast, index)}
                />
              </Box>
            </>
          );
        }}
        keyExtractor={(_, index) => index.toString()}
      />
      <Box position="absolute" top={24} right={24}>
        <StyledPressable
          pressableProps={{
            android_ripple: { radius: 50, borderless: true },
            onPress: handleSkipPress,
          }}
          alignSelf="flex-end"
          marginBottom="l"
        >
          <StyledText variant="sublimeSemiBold" color="accent">
            Skip
          </StyledText>
        </StyledPressable>
      </Box>
    </>
  );
};

export default OnboardingSlider;
