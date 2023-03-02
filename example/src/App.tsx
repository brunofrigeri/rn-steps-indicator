import React, { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import StepIndicator, { Step, StepIndicatorStyles } from 'rn-step-indicator';
import Ionicons from '@expo/vector-icons/Ionicons';

const completedStyles: StepIndicatorStyles['completed'] = {
  indicator: {
    borderWidth: 2,
    size: 30,
    color: 'skyblue',
  },
  stroke: {
    thickness: 4,
    color: 'blue',
  },
};

const uncompletedStyles: StepIndicatorStyles['uncompleted'] = {
  indicator: {
    borderWidth: 2,
    size: 30,
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
    size: 45,
    color: 'green',
  },
};

export const defaultStyles: StepIndicatorStyles = {
  completed: completedStyles,
  uncompleted: uncompletedStyles,
  current: currentStyles,
};

const steps: Step[] = [
  "That's a medium label!",
  'Thats a wonderful and long label! Lorem ipsum, maybe can turn this text so much bigger.',
  'This is label 3',
];

export default function App() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stepIndicatorContainer}>
        <StepIndicator
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          customStyles={defaultStyles}
        />
        <StepIndicator
          horizontal={false}
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          customStyles={{
            ...defaultStyles,
            uncompleted: {
              ...defaultStyles.uncompleted,
              stroke: {
                ...defaultStyles.uncompleted.stroke,
                style: 'dashed',
                dashStyles: {
                  gap: 4,
                  length: 20,
                  color: 'skyblue',
                },
              },
            },
          }}
          renderLabel={(step, status) => {
            switch (status) {
              case 'current':
                return (
                  <Text style={styles.customStepIndicatorLabel}>{step}</Text>
                );
              case 'completed':
              case 'uncompleted':
              default:
                return null;
            }
          }}
          renderStepIndicator={(_, status) => {
            switch (status) {
              case 'current':
                return <Ionicons name="analytics-sharp" />;
              case 'completed':
                return <Ionicons name="checkmark" />;
              case 'uncompleted':
              default:
                return null;
            }
          }}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          disabled={currentStep <= 0}
          style={[styles.prevButton, { opacity: Number(currentStep > 0) }]}
          onPress={() =>
            setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : 0))
          }
        >
          <Text style={styles.buttonText}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() =>
            setCurrentStep((prevStep) =>
              prevStep < steps.length - 1 ? prevStep + 1 : steps.length - 1
            )
          }
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stepIndicatorContainer: {
    flex: 1,
    padding: 20,
  },
  customStepIndicatorLabel: {
    fontWeight: '700',
    fontSize: 18,
    marginLeft: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  prevButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: 'green',
  },
  nextButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '700',
  },
});
