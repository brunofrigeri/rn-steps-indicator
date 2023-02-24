import { useCallback, useEffect } from 'react';
import { useSharedValue } from 'react-native-reanimated';

type UseAnimatedStylesProps = {
  horizontal: boolean;
  currentStep: number;
  width: number;
  stepsSize: number;
  height: number;
};

export const useAnimatedStyles = ({
  horizontal,
  currentStep,
  stepsSize,
  width,
  height,
}: UseAnimatedStylesProps) => {
  const finishedProgressBar = useSharedValue(0);

  const onCurrentStepChanged = useCallback(() => {
    finishedProgressBar.value =
      (currentStep * (horizontal ? width : height)) / (stepsSize - 1);
  }, [currentStep, finishedProgressBar, stepsSize, height, width, horizontal]);

  useEffect(() => {
    onCurrentStepChanged();
  }, [onCurrentStepChanged]);

  return {
    finishedProgressBar,
  };
};
