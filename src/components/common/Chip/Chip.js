import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  text: {
    textTransform: 'capitalize',
    fontSize: 11,
    color: 'white',
  },
});

const Chip = ({ color, text, containerStyles }) => (
  <View style={[
    styles.container,
    containerStyles,
      {
        backgroundColor: color,
      },
    ]}
  >
    <Text style={styles.text}>{text}</Text>
  </View>
);

Chip.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  containerStyles: PropTypes.object,
};

Chip.defaultProps = {
  containerStyles: {},
};

export default Chip;
