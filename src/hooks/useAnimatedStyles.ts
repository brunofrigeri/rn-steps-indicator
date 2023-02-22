import { useCallback, useEffect } from 'react';
import { useSharedValue } from 'react-native-reanimated';

type UseAnimatedStylesProps = {
  currentStep: number;
  width: number;
  stepsSize: number;
};

export const useAnimatedStyles = ({
  currentStep,
  width,
  stepsSize,
}: UseAnimatedStylesProps) => {
  const finishedProgressBar = useSharedValue(0);

  const onCurrentStepChanged = useCallback(() => {
    finishedProgressBar.value = currentStep * (width / stepsSize);
  }, [currentStep, finishedProgressBar, stepsSize, width]);

  useEffect(() => {
    onCurrentStepChanged();
  }, [onCurrentStepChanged]);

  return {
    finishedProgressBar,
  };
};
