# rn-step-indicator

A simple react-native library component for a Step Indicator with custom styling.

## Installation

```sh
npm install rn-step-indicator
```

## Simple Usage

```js
import StepIndicator from 'rn-step-indicator';

// ...

const steps = []

const defaultStyles = {
    completed: {},
    uncompleted: {},
    current: {}
}

const MyComponent = () => {
    return (
        <StepIndicator
            steps={steps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            customStyles={defaultStyles}
        />
    )
}

export default MyComponent;
```

## Customizing Indicator and Label

```js
import { StepIndicator } from 'rn-step-indicator';

// ...

const result = await multiply(3, 7);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
