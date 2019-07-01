import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

import { MEXICAN_RED, BROWN_BRAMBLE } from 'helpers/Colors';

const { width } = Dimensions.get('window');
const HANDLE_WIDTH = width * 0.52;
const HEIGHT = 12;
const BORDER_WIDTH = 1;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    left: ((width / 2) - (HANDLE_WIDTH / 2)),
  },
});

const PokedexBottomHandle = () => (
  <View style={styles.container}>
    <Svg
      height={HEIGHT}
      width={HANDLE_WIDTH}
    >
      <Rect
        x={0}
        y={0}
        width={HANDLE_WIDTH}
        height={HEIGHT}
        rx={8}
        fill={BROWN_BRAMBLE}
      />
      <Rect
        x={BORDER_WIDTH}
        y={BORDER_WIDTH}
        width={HANDLE_WIDTH - (BORDER_WIDTH * 2)}
        height={HEIGHT - (BORDER_WIDTH * 2)}
        rx={8}
        fill={MEXICAN_RED}
      />
    </Svg>
  </View>
);

PokedexBottomHandle.propTypes = {
};

export default PokedexBottomHandle;
