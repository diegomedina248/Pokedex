import { StyleSheet } from 'react-native';

import { MEXICAN_RED, WHITE } from 'helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MEXICAN_RED,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    padding: 20,
    color: WHITE,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
