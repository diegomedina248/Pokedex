import React, { Fragment } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Rect, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

import { MOJO, BROWN_BRAMBLE, MEXICAN_RED, CARNATION } from 'helpers/Colors';

const { height } = Dimensions.get('window');
const WIDTH = 32;
const HEIGHT = 300;

const BORDER_PATH = 'M32,0 L12.8031344,0 C5.25277337,0 0,11.321142 0,24 L0,276 C0,289.272754 5.68731332,300 12.8031344,300 L32,300 L32,0 Z';
const INNER_PATH = 'M32,3 L13,3 C7.64823958,3 3,12.3630359 3,24.999631 L3,276 C3,286.076215 5.88417888,297 13,297 L32,297 L32,3 Z';
const TOP_BG = 'M32,3 L13,3 C7.64823958,3 3,12.3630359 3,24.999631 L3,40 L32,40 L32,3 Z';

const SEPARATOR_START_Y = 40;
const SEPARATOR_START_X = 3;
const SEPARATOR_TOP_HEIGHT = 3;
const SEPARATOR_BOTTOM_HEIGHT = 4;

const Separator = ({ startY }) => (
  <Fragment>
    <Rect
      x={SEPARATOR_START_X}
      y={startY}
      width={WIDTH - SEPARATOR_START_X}
      height={SEPARATOR_TOP_HEIGHT}
      fill={BROWN_BRAMBLE}
    />
    <Rect
      x={SEPARATOR_START_X}
      y={startY + SEPARATOR_TOP_HEIGHT}
      width={WIDTH - SEPARATOR_START_X}
      height={SEPARATOR_BOTTOM_HEIGHT}
      fill={CARNATION}
    />
  </Fragment>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
  },
});

const PokedexRightHandle = ({ aboveHeight }) => {
  const top = ((height - aboveHeight) / 2) - (HEIGHT / 2);

  return (
    <View style={[styles.container, { top }]}>
      <Svg
        height={HEIGHT}
        width={WIDTH}
      >
        <Path
          d={BORDER_PATH}
          fill={BROWN_BRAMBLE}
        />
        <Path
          d={INNER_PATH}
          fill={MOJO}
        />
        <Path
          d={TOP_BG}
          fill={MEXICAN_RED}
        />
        <Separator startY={SEPARATOR_START_Y} />
        <Separator startY={HEIGHT - SEPARATOR_START_Y} />
      </Svg>
    </View>
  );
};

PokedexRightHandle.propTypes = {
  aboveHeight: PropTypes.number.isRequired,
};

export default PokedexRightHandle;
