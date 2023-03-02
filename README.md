# React Native Step Indicator

A simple react-native Step Indicator widget with custom styling using `react-native-reanimated` for introducing custom animations, in the manner we have it as a peer dependency, and implemented completely with `typescript`.

## Installation

```sh
npm install rn-step-indicator react-native-reanimated
```

## Simple Usage

```js
import StepIndicator from 'rn-step-indicator';

// ...

const steps = ["This is my label", "This is my other label", "This is the third label"]

const defaultStyles = {
    completed: {
        label: {
            fontSize: 14,
            fontFamily: 'Roboto'
        };
        indicator: {
            borderWidth: 1,
            size: 30,
            color: 'red',
        };
        stroke: {};
    },
    uncompleted: {
        label: {
            fontSize: 14,
            fontFamily: 'Roboto'
        };
        indicator: {
            borderWidth: 1,
            size: 30,
            color: 'blue',
        };
        stroke: {
            style: 'dashed'
            thickness: 3,
        };
    },
    current: {
        label: {
            fontSize: 18,
            fontFamily: 'Roboto'
        };
        indicator: {
            borderWidth: 3,
            size: 45,
            color: 'green',
        };
    }
}

const MyRNStepIndicator = () => {
    return (
        <StepIndicator
            steps={steps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            customStyles={defaultStyles}
        />
    )
}

export default MyRNStepIndicator;
```

## Customizing Indicator and Label

```js
import StepIndicator from 'rn-step-indicator';

// ...

const steps = ["This is my label", "This is my other label", "This is the third label"]

const defaultStyles = {
    ...
}

const renderCustomLabel = (step, status) => {
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
}

const renderCustomIndicator = (step, status) => {
    switch (status) {
        case 'current':
            return <Ionicons name="analytics-sharp" />;
        case 'completed':
            return <Ionicons name="checkmark" />;
        case 'uncompleted':
        default:
            return null;
    }
}

const MyRNStepIndicator = () => {
    return (
        <StepIndicator
            steps={steps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            customStyles={defaultStyles}
            renderLabel={renderCustomLabel}
            renderStepIndicator={renderCustomIndicator}
        />
    )
}

export default MyRNStepIndicator;
```

## Step Indicator Properties

| Name | Description | Type | Default |
| ------------ | ------------- | ------------ |------------ |
| `horizontal` | Used for defining the direction of the step indicator | Boolean | true
| `steps` | Array of steps used in the step indicator | String[] | []
| `currentStep` | Current position of the steps | Number | 0
| `setCurrentStep` | Function for updating the current position | Function (stepPosition: number) | () => {}
| `renderLabel` | Function that receives ```step``` and ```stepStatus``` as params and expects an element or null being returned as a custom label | Function(step: Step, status: StepStatus) | undefined
| `renderStepIndicator` | Function that receives ```step``` and ```stepStatus``` as params and expects an element or null being returned as a custom indicator | String[] | true
| `customStyles` | Styles for customizing as the user wishes, the step indicator | StepIndicatorStyles | {}

## Custom Styles

| Name | Type | Default |
| ------------ | ------------ |------------ |
| ```completed``` | StepStyles  | {}
| ```current``` | StepStyles  | {}
| ```uncompleted``` | StepStyles  | {}

<details>
  <summary>Completed Styles</summary>
  
| Name | Type | Default |
| ------------ | ------------ |------------ |
| ```label``` | TextStyle  | {}
| ```indicator``` | IndicatorStyles  | {}
| ```stroke``` | StrokeStyles  | {}

### Indicator
| Name | Type | Default |
| ------------ | ------------ |------------ |
| ```borderWidth``` | Number  | 2 |
| ```size``` | Number | 30 |
| ```textStyle``` | TextStyle  | {} |
| ```color``` | String | 'skyblue' |

### Stroke
| Name | Type | Default |
| ------------ | ------------ |------------ |
| ```style``` | 'solid' or 'dashed'  | 'solid' |
| ```dashStyles``` | DashStyle  | {} |
| ```thickness``` | Number  | 4 |
| ```color``` | String | 'skyblue' |

#### DashStyles
| Name | Type | Default |
| ------------ | ------------ |------------ |
| ```gap``` | Number  | 2 |
| ```length``` | Number  | 4 |
| ```thickness``` | Number  | 1 |
| ```color``` | String | 'gray' |
</details>
<details>
  <summary>Current Styles</summary>

| Name | Type | Default |
| ------------ | ------------ |------------ |
| ```label``` | TextStyle  | { fontSize: 18, fontWeight: '700' }
| ```indicator``` | IndicatorStyles  | {}
| ```stroke``` | StrokeStyles  | {}

### Indicator
| Name | Type | Default |
| ------------ | ------------ |------------ |
| ```borderWidth``` | Number  | 4 |
| ```size``` | Number | 40 |
| ```textStyle``` | TextStyle  | {} |
| ```color``` | String | 'green' |

</details>
<details>
  <summary>Uncompleted Styles</summary>
  
| Name | Type | Default |
| ------------ | ------------ |------------ |
| ```label``` | TextStyle  | {}
| ```indicator``` | IndicatorStyles  | {}
| ```stroke``` | StrokeStyles  | {}

### Indicator
| Name | Type | Default |
| ------------ | ------------ |------------ |
| ```borderWidth``` | Number  | 2 |
| ```size``` | Number | 30 |
| ```textStyle``` | TextStyle  | {} |
| ```color``` | String | 'gray' |

### Stroke
| Name | Type | Default |
| ------------ | ------------ |------------ |
| ```style``` | 'solid' or 'dashed'  | 'solid' |
| ```dashStyles``` | DashStyle  | {} |
| ```thickness``` | Number  | 2 |
| ```color``` | String | ''gray |

#### DashStyles
| Name | Type | Default |
| ------------ | ------------ |------------ |
| ```gap``` | Number  | 2 |
| ```length``` | Number  | 4 |
| ```thickness``` | Number  | 1 |
| ```color``` | String | 'gray' |
</details>


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
