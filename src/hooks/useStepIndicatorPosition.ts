import type { ViewStyle } from 'react-native';

export const useStepIndicatorPosition = (horizontal: boolean) => {
  const horizontalPositionStyles: ViewStyle = {
    left: 0,
    right: 0,
  };

  const verticalPositionStyles: ViewStyle = {
    top: 0,
    bottom: 0,
  };

  return {
    positionStyles: horizontal
      ? horizontalPositionStyles
      : verticalPositionStyles,
  };
};
