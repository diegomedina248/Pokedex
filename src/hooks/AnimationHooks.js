/* eslint-disable import/prefer-default-export */
import { useEffect, useCallback, useState } from 'react';
import { Animated } from 'react-native';

export const useIntermittent = (startDelay = 0, from = 1, to = 0.4) => {
  const [animation] = useState(new Animated.Value(1));

  const intermittent = useCallback(() => {
    Animated.sequence([
      Animated.spring(animation, {
        toValue: to,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: from,
        useNativeDriver: true,
      }),
    ]).start(() => intermittent());
  }, [animation, from, to]);

  useEffect(() => {
    const timeout = setTimeout(() => intermittent(), startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay, intermittent]);

  return animation;
};
