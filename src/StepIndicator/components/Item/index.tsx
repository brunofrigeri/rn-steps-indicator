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
  ({ index, onStepChange, customStepIndicator, customStyles }) => {
    const indicatorContainerStyle = useAnimatedStyle(() => ({
      borderWidth: withTiming(customStyles?.borderWidth as Required<number>, {
        duration: 500,
        easing: Easing.linear,
      }),
      width: withTiming(customStyles?.size ?? 40, {
        duration: 500,
        easing: Easing.linear,
      }),
      height: withTiming(customStyles?.size ?? 40, {
        duration: 500,
        easing: Easing.linear,
      }),
    }));

    return (
      <TouchableWithoutFeedback onPress={() => onStepChange(index)}>
        <View style={styles.stepContainer}>
          <Animated.View style={[styles.indicator, indicatorContainerStyle]}>
            {customStepIndicator ? (
              customStepIndicator
            ) : (
              <Text>{index + 1}</Text>
            )}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
);

export default Item;
