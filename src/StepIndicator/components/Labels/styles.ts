import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  horizontalContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  verticalContainer: {
    marginHorizontal: 10,
    flexShrink: 1,
  },
  itemContainer: {
    flexShrink: 1,
  },
  item: {
    textAlign: 'center',
  },
});
