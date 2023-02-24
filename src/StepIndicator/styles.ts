import { StyleSheet } from 'react-native';
import type { StepIndicatorStyles } from './types';

const completedStyles: StepIndicatorStyles['completed'] = {
  indicator: {
    borderWidth: 2,
    color: 'skyblue',
    size: 30,
  },
  stroke: {
    thickness: 4,
    color: 'skyblue',
  },
};

const uncompletedStyles: StepIndicatorStyles['uncompleted'] = {
  indicator: {
    borderWidth: 2,
    color: 'gray',
    size: 30,
  },
  stroke: {
    thickness: 2,
    color: 'gray',
  },
};

const currentStyles: StepIndicatorStyles['current'] = {
  label: {
    fontSize: 18,
    fontWeight: '700',
  },
  indicator: {
    borderWidth: 4,
    scale: 1.5,
    size: 30,
    color: 'green',
  },
};

export const defaultStyles: StepIndicatorStyles = {
  completed: completedStyles,
  uncompleted: uncompletedStyles,
  current: currentStyles,
};

export const styles = StyleSheet.create({
  centered: {
    alignItems: 'center',
  },
  horizontalContainer: {
    flexDirection: 'row',
  },
  verticalContainer: {
    flexDirection: 'column',
  },
  progressBar: {
    position: 'absolute',
  },
  progressFinishedBar: {
    position: 'absolute',
  },
});
