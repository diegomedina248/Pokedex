import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Svg, { Polygon } from 'react-native-svg';

import { MOJO, BROWN_BRAMBLE, CARNATION } from 'helpers/Colors';

const { width, height } = Dimensions.get('window');

const MIDDLE_HEIGHT = 45;
const PATH_POINTS = remainingHeight => [
  `0,${MIDDLE_HEIGHT}`,
  `80,${MIDDLE_HEIGHT}`,
  '135,0',
  `${width},0`,
  `${width},${remainingHeight}`,
  `0,${remainingHeight}`,
];

const BORDER_WEIGHT = 4;
const BORDER_POINTS = [
  `0,${MIDDLE_HEIGHT + BORDER_WEIGHT}`,
  `0,${MIDDLE_HEIGHT}`,
  `80,${MIDDLE_HEIGHT}`,
  '135,0',
  `${width},0`,
  `${width},${BORDER_WEIGHT}`,
  `135,${BORDER_WEIGHT}`,
  `80,${MIDDLE_HEIGHT + BORDER_WEIGHT}`,
];

const SHADOW_WEIGHT = 12;
const SHADOW_POINTS = [
  `0,${MIDDLE_HEIGHT + BORDER_WEIGHT + SHADOW_WEIGHT}`,
  `0,${MIDDLE_HEIGHT + BORDER_WEIGHT}`,
  `80,${MIDDLE_HEIGHT + BORDER_WEIGHT}`,
  `135,${BORDER_WEIGHT}`,
  `${width},${BORDER_WEIGHT}`,
  `${width},${BORDER_WEIGHT + SHADOW_WEIGHT}`,
  `135,${BORDER_WEIGHT + SHADOW_WEIGHT}`,
  `80,${MIDDLE_HEIGHT + BORDER_WEIGHT + SHADOW_WEIGHT}`,
];

const PokedexBottom = ({ aboveHeight }) => {
  const remainingHeight = height - aboveHeight;

  return (
    <Svg
      height={remainingHeight}
      width={width}
    >
      <Polygon
        points={PATH_POINTS(remainingHeight).join(', ')}
        fill={MOJO}
      />
      <Polygon
        points={BORDER_POINTS.join(', ')}
        fill={BROWN_BRAMBLE}
      />
      <Polygon
        points={SHADOW_POINTS.join(', ')}
        fill={CARNATION}
      />
    </Svg>
  );
};

PokedexBottom.propTypes = {
  aboveHeight: PropTypes.number.isRequired,
};

export default PokedexBottom;
