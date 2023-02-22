import React from 'react';
import { Text, View } from 'react-native';
import type { Step } from '../../types';
import type { StepIndicatorProps } from '../../';
import { mapStepToStatus } from '../../../helpers';
import { styles } from './styles';

export interface LabelsProps {
  currentStep: number;
  steps: Step[];
  renderLabel?: StepIndicatorProps['renderLabel'];
}

// TODO: Avoid showing all labels if user wants. Maybe just the current one (in cases of many steps could be good)
const Labels: React.FC<LabelsProps> = ({
  steps = [],
  currentStep,
  renderLabel,
}) => {
  const renderItem = (step: Step, index: number) => {
    const customLabel = renderLabel?.(
      step,
      mapStepToStatus(currentStep, index)
    );

    return (
      <View key={step.label} style={styles.itemContainer}>
        {customLabel ? (
          customLabel
        ) : (
          <Text style={styles.item}>{step.label}</Text>
        )}
      </View>
    );
  };

  return <View style={styles.container}>{steps.map(renderItem)}</View>;
};

export default Labels;
