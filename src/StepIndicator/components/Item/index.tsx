import React, { memo } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import type { Step, StepStyles } from '../../types';
import { styles } from './styles';

export interface ItemProps {
  step: Step;
  index: number;
  onStepChange: (step: number) => void;
  isCurrent?: boolean;
  customStepIndicator?: React.ReactElement;
  customStyles: StepStyles['indicator'];
}

const Item: React.FC<ItemProps> = memo(
  ({ step, index, onStepChange, customStepIndicator, customStyles }) => {
    const indicatorContainerStyle = useAnimatedStyle(() => ({
      borderWidth: withTiming(customStyles?.borderWidth as Required<number>, {
        duration: 200,
        easing: Easing.linear,
      }),
      transform: [
        {
          scale: withTiming(customStyles?.scale ?? 1, {
            duration: 200,
            easing: Easing.linear,
          }),
        },
      ],
    }));

    return (
      <TouchableWithoutFeedback onPress={() => onStepChange(index)}>
        <View style={styles.stepContainer}>
          <Animated.View style={[styles.indicator, indicatorContainerStyle]}>
            {customStepIndicator ? (
              customStepIndicator
            ) : (
              <Text>{step.indicator}</Text>
            )}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
);

export default Item;
