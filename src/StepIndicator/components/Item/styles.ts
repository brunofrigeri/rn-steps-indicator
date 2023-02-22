import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  stepContainer: {
    flex: 1,
    alignItems: 'center',
    zIndex: 999,
  },
  indicator: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 999,
    backgroundColor: 'white',
  },
  label: {
    position: 'absolute',
    top: '100%',
    paddingTop: 10,
  },
});
