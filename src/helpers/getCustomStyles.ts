import type { StepIndicatorStyles } from '../StepIndicator/types';

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
    size: 40,
    color: 'green',
  },
};

const defaultStyles: StepIndicatorStyles = {
  completed: completedStyles,
  uncompleted: uncompletedStyles,
  current: currentStyles,
};

export const getCustomStyles = (
  customStyles?: StepIndicatorStyles
): StepIndicatorStyles => {
  if (customStyles) {
    const { completed, uncompleted, current } = customStyles;
    const {
      completed: defaultCompleted,
      uncompleted: defaultUncompleted,
      current: defaultCurrent,
    } = defaultStyles;

    const mergedCompletedStyles: StepIndicatorStyles['completed'] = {
      ...defaultCompleted,
      ...completed,
      stroke: {
        ...defaultCompleted.stroke,
        ...completed.stroke,
      },
      indicator: {
        ...defaultCompleted.indicator,
        ...completed.indicator,
      },
      label: completed.label ?? defaultCompleted.label,
    };
    const mergedUncompletedStyles = {
      ...defaultUncompleted,
      ...uncompleted,
      stroke: {
        ...defaultUncompleted.stroke,
        ...uncompleted.stroke,
      },
      indicator: {
        ...defaultUncompleted.indicator,
        ...uncompleted.indicator,
      },
      label: uncompleted.label ?? defaultUncompleted.label,
    };
    const mergedCurrentStyles = {
      ...defaultCurrent,
      ...current,
      indicator: {
        ...defaultCurrent.indicator,
        ...current.indicator,
      },
      label: current.label ?? defaultCurrent.label,
    };

    return {
      completed: mergedCompletedStyles,
      uncompleted: mergedUncompletedStyles,
      current: mergedCurrentStyles,
    };
  }

  return defaultStyles;
};
