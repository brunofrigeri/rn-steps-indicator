import React, { useState } from 'react';
import { View, ViewStyle } from 'react-native';
import { styles } from './styles';

export interface DashedLineProps {
  dashGap?: number;
  dashLength?: number;
  dashThickness?: number;
  dashColor?: string;
  stepsSize: number;
  dashContainerStyles: ViewStyle;
}

const DashedLine: React.FC<DashedLineProps> = ({
  dashGap = 2,
  dashLength = 4,
  dashThickness = 1,
  dashColor = 'gray',
  dashContainerStyles,
}) => {
  const [width, setWidth] = useState<number>(0);
  const numberOfDashes = Math.ceil(width / (dashGap + dashLength));

  const dashStyles: ViewStyle = {
    width: dashLength,
    height: dashThickness,
    marginRight: dashGap,
    backgroundColor: dashColor,
  };

  return (
    <View
      style={[styles.container, dashContainerStyles]}
      onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
    >
      {[
        ...new Array(numberOfDashes)
          .fill(null)
          .map((_, index) => <View key={index} style={dashStyles} />),
      ]}
    </View>
  );
};

export default DashedLine;
