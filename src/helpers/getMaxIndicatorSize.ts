import type { StepIndicatorStyles } from '../StepIndicator/types';

type GetMaxIndicatorSizeResult = { width: number } | { height: number };

export const getMaxIndicatorSize = (
  customStyles: StepIndicatorStyles,
  horizontal = true
): GetMaxIndicatorSizeResult => {
  if (horizontal) {
    return {
      height: Math.max(
        customStyles?.completed.indicator?.size ?? 0,
        customStyles?.uncompleted.indicator?.size ?? 0,
        customStyles?.current.indicator?.size ?? 0
      ),
    };
  }

  return {
    width: Math.max(
      customStyles?.completed.indicator?.size ?? 0,
      customStyles?.uncompleted.indicator?.size ?? 0,
      customStyles?.current.indicator?.size ?? 0
    ),
  };
};
