import React from 'react';
import type { Step, StepIndicatorStyles, StepStyles } from '../../types';
import type { StepIndicatorProps } from '../../';
import Item from '../Item';
import { mapStepToStatus } from '../../../helpers';

type StepsProps = Pick<
  StepIndicatorProps,
  'steps' | 'renderStepIndicator' | 'currentStep'
> & {
  onStepChange: (step: number) => void;
  customStyles: StepIndicatorStyles;
};

const Steps: React.FC<StepsProps> = ({
  steps = [],
  onStepChange,
  currentStep,
  renderStepIndicator,
  customStyles,
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

  return <>{steps.map(renderItem)}</>;
};

export default Steps;
