import { StyleSheet } from 'react-native';
import type { StepIndicatorStyles } from './types';

const completedStyles: StepIndicatorStyles['completed'] = {
  indicator: {
    borderWidth: 2,
    color: 'skyblue',
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
    color: 'green',
  },
};

export const defaultStyles: StepIndicatorStyles = {
  completed: completedStyles,
  uncompleted: uncompletedStyles,
  current: currentStyles,
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    position: 'absolute',
  },
  progressFinishedBar: {
    position: 'absolute',
  },
});
