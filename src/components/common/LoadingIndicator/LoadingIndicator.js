import React, { useRef, useEffect, useCallback } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

import pokeballIcon from 'assets/ic_pokeball/ic_pokeball.png';

const LoadingIndicator = ({
  width,
  height,
  duration,
  delay,
  style,
}) => {
  const value = useRef(new Animated.Value(0)).current;
  const spin = useCallback(() => {
    value.setValue(0);
    Animated.timing(
      value,
      {
        toValue: 1,
        duration,
        delay,
        useNativeDriver: true,
      },
    ).start(() => spin());
  }, [value, duration, delay]);

  useEffect(() => spin(), [spin]);

  const spinValue = value.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.Image
      style={[
        {
          width,
          height,
          transform: [{ rotate: spinValue }],
        },
        style,
      ]}
      source={pokeballIcon}
    />
  );
};

LoadingIndicator.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  duration: PropTypes.number,
  delay: PropTypes.number,
  style: PropTypes.object,
};

LoadingIndicator.defaultProps = {
  width: 20,
  height: 20,
  duration: 600,
  delay: 300,
  style: {},
};

export default LoadingIndicator;
