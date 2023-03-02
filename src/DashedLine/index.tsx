import React, { useState } from 'react';
import { View, ViewStyle } from 'react-native';
import { styles } from './styles';

export interface DashedLineProps {
  horizontal: boolean;
  dashGap?: number;
  dashLength?: number;
  dashThickness?: number;
  dashColor?: string;
  stepsSize: number;
  dashContainerStyles?: ViewStyle;
}

const DashedLine: React.FC<DashedLineProps> = ({
  horizontal,
  dashGap = 2,
  dashLength = 4,
  dashThickness = 1,
  dashColor = 'gray',
  dashContainerStyles,
}) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const numberOfDashes = Math.floor(
    (horizontal ? width : height) / (dashGap + dashLength)
  );

  const dashStyles: ViewStyle = {
    width: horizontal ? dashLength : dashThickness,
    height: horizontal ? dashThickness : dashLength,
    marginRight: horizontal ? dashGap : 0,
    marginBottom: horizontal ? 0 : dashGap,
    backgroundColor: dashColor,
  };

  return (
    <View
      style={[
        styles.absoluteContainer,
        horizontal ? styles.horizontalContainer : styles.verticalContainer,
        dashContainerStyles,
      ]}
      onLayout={(event) => {
        setWidth(event.nativeEvent.layout.width);
        setHeight(event.nativeEvent.layout.height);
      }}
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
