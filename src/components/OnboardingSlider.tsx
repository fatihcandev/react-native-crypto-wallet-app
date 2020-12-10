import React, { useRef } from 'react';
import { Dimensions, FlatList } from 'react-native';

import { onboardingSliderData } from 'data';
import OnboardingSliderItem from './OnboardingSliderItem';
import Box from './Box';
import StyledButton from './StyledButton';
import PressableText from './PressableText';

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
              {!isLast && (
                <Box position="absolute" top={24} right={24}>
                  <PressableText variant="sublimeSemiBold" color="accent" onPress={handleSkipPress}>
                    Skip
                  </PressableText>
                </Box>
              )}
            </>
          );
        }}
        keyExtractor={(_, index) => index.toString()}
      />
    </>
  );
};

export default OnboardingSlider;
