import type { StyleProp, TextStyle } from 'react-native';

export type Step = string;

export type StepStatus = 'completed' | 'uncompleted' | 'current';

type LabelStyles = StyleProp<TextStyle>;
type IndicatorStyles = {
  borderWidth?: number;
  size?: number;
  textStyle?: StyleProp<TextStyle>;
  color?: string;
};

type DashStyles = {
  gap?: number;
  length?: number;
  thickness?: number;
  color?: string;
};

type StrokeStyles = {
  style?: 'solid' | 'dashed';
  dashStyles?: DashStyles;
  thickness?: number;
  color?: string;
};

export type StepStyles = {
  label: LabelStyles;
  indicator: IndicatorStyles;
  stroke: StrokeStyles;
};

export type CurrentStepStyles = {
  label: LabelStyles;
  indicator: IndicatorStyles;
};

export type StepIndicatorStyles = {
  completed: Partial<StepStyles>;
  uncompleted: Partial<StepStyles>;
  current: Partial<CurrentStepStyles>;
};
