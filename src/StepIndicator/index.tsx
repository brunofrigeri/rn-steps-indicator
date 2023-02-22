import React, { useState } from 'react';
import { LayoutChangeEvent, View, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import DashedLine from '../DashedLine';
import { useAnimatedStyles } from '../hooks/useAnimatedStyles';
import { defaultStyles, styles } from './styles';
import type { Step, StepIndicatorStyles, StepStatus } from './types';
import Labels from './components/Labels';
import Steps from './components/Steps';

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
  currentStep,
  setCurrentStep,
  steps,
  customStyles = defaultStyles,
  renderLabel,
  renderStepIndicator,
}) => {
  const [width, setWidth] = useState<number>(0);

  const stepsSize = steps.length;
  const { finishedProgressBar } = useAnimatedStyles({
    currentStep,
    stepsSize,
    width,
  });

  const onLayoutContainer = (event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width);
  };

  const onStepChange = (nextStep: number) => {
    setCurrentStep(nextStep);
  };

  const renderProgressBar = () => {
    const positionFromBorder = width / (2 * stepsSize);

    const strokeStyles = customStyles?.uncompleted.stroke;
    const isDashed = strokeStyles?.style === 'dashed';

    const dashPositionStyles: ViewStyle = {
      left: positionFromBorder,
      right: positionFromBorder,
    };

    const containerStyles: ViewStyle = {
      ...dashPositionStyles,
      height: strokeStyles?.thickness,
      backgroundColor: strokeStyles?.color,
    };

    if (isDashed) {
      const dashStyles = customStyles?.uncompleted.stroke?.dashStyles;

      return (
        <DashedLine
          dashContainerStyles={dashPositionStyles}
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

  const finishedProgressBarStyles = useAnimatedStyle(() => ({
    width: withTiming(finishedProgressBar.value, {
      duration: 200,
      easing: Easing.linear,
    }),
  }));

  const renderFinishedProgressBar = () => {
    const positionFromBorder = width / (2 * stepsSize);

    const strokeStyles = customStyles?.completed.stroke;

    return (
      <Animated.View
        style={[
          styles.progressFinishedBar,
          {
            left: positionFromBorder,
            right: positionFromBorder,
            height: strokeStyles?.thickness,
            backgroundColor: strokeStyles?.color,
          },
          finishedProgressBarStyles,
        ]}
      />
    );
  };

  return (
    <View>
      <View onLayout={onLayoutContainer} style={styles.container}>
        <Steps
          steps={steps}
          currentStep={currentStep}
          onStepChange={onStepChange}
          customStyles={customStyles}
          renderStepIndicator={renderStepIndicator}
        />
        {width > 0 && (
          <>
            {renderProgressBar()}
            {renderFinishedProgressBar()}
          </>
        )}
      </View>
      <Labels
        steps={steps}
        currentStep={currentStep}
        renderLabel={renderLabel}
      />
    </View>
  );
};

export default StepIndicator;
