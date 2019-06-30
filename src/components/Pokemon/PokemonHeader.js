import React, { useMemo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';

import { headerStyles as styles } from './styles';
import colors from 'helpers/PokemonColors';

import pokeballIcon from 'assets/ic_pokeball/ic_pokeball.png';
import backIcon from 'assets/ic_back/ic_back.png';
import Chip from 'components/common/Chip';

const ID_DIGITS = 3;
const BACK_OPACITY_ON_PRESS = 0.7;

const PokemonHeader = ({
  id,
  name,
  baseColor,
  sprites,
  types,
  onBackPress,
}) => {
  const pokemonColors = colors[baseColor];
  const pokemonNumber = `00${id}`.slice(-ID_DIGITS);

  const wrapperStyles = {
    backgroundColor: pokemonColors.primary,
  };

  const typeChips = types.slice(0, 2).map(type => (
    <Chip
      color={pokemonColors.secondary}
      containerStyles={{
        marginRight: 6,
      }}
      text={type.type.name}
      key={type.type.name}
    />
  ));

  return (
    <View
      style={[
        styles.container,
        wrapperStyles,
      ]}
    >
      <Transition appear="left" dissapear="left">
        <TouchableOpacity
          onPress={onBackPress}
          activeOpacity={BACK_OPACITY_ON_PRESS}
          style={styles.backItemContainer}
        >
          <Image
            style={styles.backItem}
            source={backIcon}
          />
        </TouchableOpacity>
      </Transition>
      <View style={styles.baseInfoContainer}>
        <Transition appear="left" dissapear="left">
          <Text style={styles.name}>{name}</Text>
        </Transition>
        <Transition appear="right" dissapear="right">
          <Text style={styles.number}>{`#${pokemonNumber}`}</Text>
        </Transition>
      </View>
      <Transition appear="left" dissapear="left">
        <View style={styles.chips}>{typeChips}</View>
      </Transition>
      <Image
        style={styles.itemImageBackground}
        source={pokeballIcon}
      />
      <Transition shared={`image-${id}`}>
        <View style={styles.itemImageContainer}>
          <FastImage
            source={{ uri: sprites.frontDefault }}
            style={styles.itemImage}
          />
        </View>
      </Transition>
    </View>
  );
};

PokemonHeader.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  baseColor: PropTypes.string.isRequired,
  sprites: PropTypes.shape({
    frontDefault: PropTypes.string,
  }).isRequired,
  types: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.shape({
      type: PropTypes.string,
    }),
  })).isRequired,
  onBackPress: PropTypes.func.isRequired,
};

export default props => useMemo(() => <PokemonHeader {...props} />, [props]);
