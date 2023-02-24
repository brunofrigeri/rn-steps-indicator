import React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import type { Step } from '../../types';
import type { StepIndicatorProps } from '../../';
import { mapStepToStatus } from '../../../helpers';
import { styles } from './styles';

export interface LabelsProps
  extends Pick<
    StepIndicatorProps,
    'steps' | 'currentStep' | 'renderLabel' | 'horizontal'
  > {}

// TODO: Avoid showing all labels if user wants. Maybe just the current one (in cases of many steps could be good)
const Labels: React.FC<LabelsProps> = ({
  horizontal,
  steps = [],
  currentStep,
  renderLabel,
}) => {
  const renderItem = (step: Step, index: number) => {
    const currentStepStatus = mapStepToStatus(currentStep, index);
    const customLabel = renderLabel?.(step, currentStepStatus);

    const isFirst = index === 0;
    const isLast = index === steps.length - 1;

    const containerStyles: ViewStyle = {
      paddingTop: horizontal ? 0 : 5,
    };

    const textStyles: TextStyle = {
      textAlign: horizontal
        ? isFirst
          ? 'left'
          : isLast
          ? 'right'
          : 'center'
        : 'left',
    };

    return (
      <View key={step.label} style={[styles.itemContainer, containerStyles]}>
        {customLabel ? (
          customLabel
        ) : (
          <Text style={[styles.item, textStyles]}>{step.label}</Text>
        )}
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        horizontal ? styles.horizontalContainer : styles.verticalContainer,
      ]}
    >
      {steps.map(renderItem)}
    </View>
  );
};

export default Labels;
