import { StyleSheet } from 'react-native';

import { MEXICAN_RED } from 'helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: MEXICAN_RED,
  },
});

export default styles;
