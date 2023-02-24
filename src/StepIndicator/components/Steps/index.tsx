import React from 'react';
import type { Step, StepIndicatorStyles, StepStyles } from '../../types';
import type { StepIndicatorProps } from '../../';
import Item from '../Item';
import { mapStepToStatus } from '../../../helpers';
import { StyleSheet, View, ViewStyle } from 'react-native';

type StepsProps = Pick<
  StepIndicatorProps,
  'steps' | 'renderStepIndicator' | 'currentStep'
> & {
  onStepChange: (step: number) => void;
  customStyles: StepIndicatorStyles;
  directionStyles: ViewStyle;
};

const Steps: React.FC<StepsProps> = ({
  steps = [],
  onStepChange,
  currentStep,
  renderStepIndicator,
  customStyles,
  directionStyles,
}) => {
  const renderItem = (step: Step, index: number) => {
    const currentStatus = mapStepToStatus(currentStep, index);
    const customStepIndicator =
      renderStepIndicator?.(step, currentStatus) ?? undefined;

    const styles = customStyles[currentStatus].indicator as Required<
      StepStyles['indicator']
    >;

    return (
      <Item
        key={step.label}
        step={step}
        index={index}
        onStepChange={onStepChange}
        customStepIndicator={customStepIndicator}
        customStyles={styles}
      />
    );
  };

  return (
    <View style={[styles.container, directionStyles]}>
      {steps.map(renderItem)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    zIndex: 999,
  },
});

export default Steps;
