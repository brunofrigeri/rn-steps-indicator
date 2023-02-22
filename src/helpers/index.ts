import type { StepStatus } from '../StepIndicator/types';

export const mapStepToStatus = (
  currentStep: number,
  step: number
): StepStatus => {
  if (currentStep === step) return 'current';
  else if (currentStep > step) return 'completed';
  else return 'uncompleted';
};
