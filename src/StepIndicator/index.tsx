import React, { useState } from 'react';
import { LayoutChangeEvent, View, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import DashedLine from '../DashedLine';
import { useAnimatedStyles } from '../hooks/useAnimatedStyles';
import { styles } from './styles';
import type { Step, StepIndicatorStyles, StepStatus } from './types';
import Labels from './components/Labels';
import Steps from './components/Steps';
import { useStepIndicatorPosition } from '../hooks/useStepIndicatorPosition';
import { getCustomStyles } from '../helpers/getCustomStyles';

export interface StepIndicatorProps {
  horizontal?: boolean;
  steps: Step[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
  renderLabel?: (step: Step, status: StepStatus) => React.ReactElement | null;
  renderStepIndicator?: (
    step: Step,
    status: StepStatus
  ) => React.ReactElement | null;
  customStyles?: StepIndicatorStyles;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  horizontal = true,
  currentStep,
  setCurrentStep,
  steps,
  customStyles,
  renderLabel,
  renderStepIndicator,
}) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const stepIndicatorCustomStyles = getCustomStyles(customStyles);

  const stepsSize = steps.length;
  const { finishedProgressBar } = useAnimatedStyles({
    horizontal,
    currentStep,
    stepsSize,
    width,
    height,
  });

  const { positionStyles } = useStepIndicatorPosition(horizontal);

  const onLayoutContainer = (event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width);
    setHeight(event.nativeEvent.layout.height);
  };

  const onStepChange = (nextStep: number) => {
    setCurrentStep(nextStep);
  };

  const renderProgressBar = () => {
    const strokeStyles = stepIndicatorCustomStyles?.uncompleted.stroke;
    const isDashed = strokeStyles?.style === 'dashed';

    const sizeStyles = horizontal
      ? { height: strokeStyles?.thickness }
      : { width: strokeStyles?.thickness };

    const containerStyles: ViewStyle = {
      ...sizeStyles,
      ...positionStyles,
      backgroundColor: strokeStyles?.color,
    };

    if (isDashed) {
      const dashStyles =
        stepIndicatorCustomStyles?.uncompleted.stroke?.dashStyles;

      return (
        <DashedLine
          horizontal={horizontal}
          dashContainerStyles={positionStyles}
          stepsSize={stepsSize}
          dashColor={dashStyles?.color}
          dashGap={dashStyles?.gap}
          dashLength={dashStyles?.length}
          dashThickness={dashStyles?.thickness}
        />
      );
    }

    return <View style={[styles.progressBar, containerStyles]} />;
  };

  const finishedProgressBarStyles = useAnimatedStyle(() => {
    const value = withTiming(finishedProgressBar.value, {
      duration: 500,
      easing: Easing.linear,
    });

    return horizontal ? { width: value } : { height: value };
  });

  const renderFinishedProgressBar = () => {
    const strokeStyles = stepIndicatorCustomStyles?.completed.stroke;

    const sizeStyles = horizontal
      ? { height: strokeStyles?.thickness }
      : { width: strokeStyles?.thickness };

    return (
      <Animated.View
        style={[
          styles.progressFinishedBar,
          {
            backgroundColor: strokeStyles?.color,
          },
          sizeStyles,
          positionStyles,
          finishedProgressBarStyles,
        ]}
      />
    );
  };

  const directionStyles: ViewStyle = {
    flexDirection: horizontal ? 'row' : 'column',
  };

  const invertedDirectionStyles: ViewStyle = {
    flex: horizontal ? 0 : 1,
    flexDirection: !horizontal ? 'row' : 'column',
  };

  return (
    <View style={invertedDirectionStyles}>
      <View
        onLayout={onLayoutContainer}
        style={[directionStyles, styles.centered]}
      >
        <Steps
          steps={steps}
          currentStep={currentStep}
          onStepChange={onStepChange}
          customStyles={stepIndicatorCustomStyles}
          renderStepIndicator={renderStepIndicator}
          directionStyles={directionStyles}
          horizontal={horizontal}
        />
        {renderProgressBar()}
        {width > 0 && renderFinishedProgressBar()}
      </View>
      <Labels
        horizontal={horizontal}
        steps={steps}
        currentStep={currentStep}
        renderLabel={renderLabel}
      />
    </View>
  );
};

export default StepIndicator;
