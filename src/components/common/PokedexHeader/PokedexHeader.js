import React from 'react';
import { Platform, Dimensions, View, Image, StyleSheet } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

import { MOJO, BROWN_BRAMBLE } from 'helpers/Colors';
import pokedexLens from 'assets/ic_pokedex_lens/ic_pokedex_lens.png';

const { width } = Dimensions.get('window');

const BASE_HEIGHT = 110;
const TOP_HEIGHT = Platform.OS === 'ios' ? 40 : 0;
export const HEIGHT = BASE_HEIGHT + TOP_HEIGHT;

const MIDDLE_HEIGHT = HEIGHT - 45;
const BORDER_WEIGHT = 4;

const PATH_POINTS = [
  '0,0',
  `0,${HEIGHT}`,
  `80,${HEIGHT}`,
  `135,${MIDDLE_HEIGHT}`,
  `${width},${MIDDLE_HEIGHT}`,
  `${width},0`,
];

const BORDER_POINTS = [
  `0,${HEIGHT}`,
  `0,${HEIGHT - BORDER_WEIGHT}`,
  `80,${HEIGHT - BORDER_WEIGHT}`,
  `135,${MIDDLE_HEIGHT - BORDER_WEIGHT}`,
  `${width},${MIDDLE_HEIGHT - BORDER_WEIGHT}`,
  `${width},${MIDDLE_HEIGHT}`,
  `135,${MIDDLE_HEIGHT}`,
  `80,${HEIGHT}`,
];

const RED_COLOR = '#AF2E31';
const YELLOW_COLOR = '#F7D260';
const GREEN_COLOR = '#52945C';
const styles = StyleSheet.create({
  decorationContainer: {
    position: 'absolute',
    top: TOP_HEIGHT + 10,
    left: 25,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  lensImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginRight: 14,
  },
  dot: {
    width: 12,
    height: 12,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: BROWN_BRAMBLE,
    marginRight: 3,
  },
});

const PokemonHeader = () => (
  <View>
    <Svg
      height={HEIGHT}
      width={width}
    >
      <Polygon
        points={PATH_POINTS.join(', ')}
        fill={MOJO}
      />
      <Polygon
        points={BORDER_POINTS.join(', ')}
        fill={BROWN_BRAMBLE}
      />
    </Svg>
    <View style={styles.decorationContainer}>
      <Image
        style={styles.lensImage}
        source={pokedexLens}
      />
      <View style={[styles.dot, { backgroundColor: RED_COLOR }]} />
      <View style={[styles.dot, { backgroundColor: YELLOW_COLOR }]} />
      <View style={[styles.dot, { backgroundColor: GREEN_COLOR }]} />
    </View>
  </View>
);

PokemonHeader.propTypes = {
};

export default PokemonHeader;
