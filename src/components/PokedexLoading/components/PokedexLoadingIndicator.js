import React from 'react';
import { Animated, StyleSheet, Dimensions } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';
import PropTypes from 'prop-types';

import { CASABLANCA, BROWN_BRAMBLE } from 'helpers/Colors';

const BORDER_WIDTH = 2;
const HEIGHT = 50;
const WIDTH = 35;
const PATH_POINTS = [
  '0,0',
  `${WIDTH},${HEIGHT / 2}`,
  `0,${HEIGHT}`,
];

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 25,
  },
});

const { height } = Dimensions.get('window');

const PokedexLoadingIndicator = ({ aboveHeight }) => {
  const bottomHeight = height - aboveHeight;
  const top = (bottomHeight / 2) - (HEIGHT / 2);

  return (
    <Animated.View style={[styles.container, { top }]}>
      <Svg
        height={HEIGHT}
        width={WIDTH}
      >
        <Polygon
          points={PATH_POINTS.join(', ')}
          strokeWidth={BORDER_WIDTH}
          stroke={BROWN_BRAMBLE}
          fill={CASABLANCA}
        />
      </Svg>
    </Animated.View>
  );
};

PokedexLoadingIndicator.propTypes = {
  aboveHeight: PropTypes.number.isRequired,
};

export default PokedexLoadingIndicator;
