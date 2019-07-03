import React, { useRef, useCallback } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

const CustomTouchable = ({ render, duration, ...otherProps }) => {
  const value = useRef(new Animated.Value(0)).current;

  const stopAnimation = animatedValue => Animated.timing(animatedValue).stop();

  const onPressIn = useCallback(() => {
    stopAnimation(value);
    Animated.timing(
      value,
      {
        toValue: 1,
        duration,
        useNativeDriver: true,
      },
    ).start();
  }, [value, duration]);

  const onPressOut = useCallback(() => {
    stopAnimation(value);
    Animated.timing(
      value,
      {
        toValue: 0,
        duration,
        useNativeDriver: true,
      },
    ).start();
  }, [value, duration]);

  return (
    <TouchableWithoutFeedback
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      {...otherProps}
    >
      {render(value)}
    </TouchableWithoutFeedback>
  );
};

CustomTouchable.propTypes = {
  render: PropTypes.func.isRequired,
  duration: PropTypes.number,
};

CustomTouchable.defaultProps = {
  duration: 200,
};

export default CustomTouchable;
