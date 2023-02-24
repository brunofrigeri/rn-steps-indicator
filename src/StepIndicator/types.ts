import type { StyleProp, TextStyle } from 'react-native';

export type Step = {
  indicator?: number | string | React.ReactElement;
  label?: string;
};

export type StepStatus = 'completed' | 'uncompleted' | 'current';

type LabelStyles = StyleProp<TextStyle>;
type IndicatorStyles = {
  borderWidth?: number;
  size?: number;
  scale?: number;
  textStyle?: StyleProp<TextStyle>;
  color?: string;
};
type StrokeStyles = {
  style?: 'solid' | 'dashed';
  dashStyles?: {
    gap?: number;
    length?: number;
    thickness?: number;
    color?: string;
  };
  thickness?: number;
  color?: string;
};

export type StepStyles = {
  label: LabelStyles;
  indicator: IndicatorStyles;
  stroke: StrokeStyles;
};

export type StepIndicatorStyles = {
  completed: Partial<StepStyles>;
  uncompleted: Partial<StepStyles>;
  current: Partial<Omit<StepStyles, 'stroke'>>;
};
