import React, { useMemo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';

import styles from './styles';
import colors from 'helpers/PokemonColors';

import pokeballIcon from 'assets/ic_pokeball/ic_pokeball.png';
import Chip from 'components/common/Chip';

const ID_DIGITS = 3;
const OPACITY_ON_HIGHLIGHT = 0.85;

const PokemonItem = ({
  id,
  name,
  baseColor,
  sprites,
  types,
  onPress,
}) => {
  const handlePress = () => onPress(id);

  const pokemonColors = colors[baseColor];
  const pokemonNumber = `00${id}`.slice(-ID_DIGITS);

  const wrapperStyles = {
    backgroundColor: pokemonColors.primary,
    borderColor: pokemonColors.secondary,
  };

  const typeChips = types.slice(0, 2).map(type => (
    <Chip
      color={pokemonColors.secondary}
      containerStyles={{
        marginBottom: 6,
        marginLeft: 10,
      }}
      text={type.type.name}
      key={type.type.name}
    />
  ));

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={OPACITY_ON_HIGHLIGHT}
      style={[
        styles.itemContainer,
        wrapperStyles,
      ]}
    >
      <Text
        style={[
          styles.itemNumber,
          {
            color: pokemonColors.secondary,
          },
        ]}
      >
        {`#${pokemonNumber}`}
      </Text>
      <Text style={styles.itemName}>{name}</Text>
      {typeChips}
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
    </TouchableOpacity>
  );
};

PokemonItem.propTypes = {
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
  onPress: PropTypes.func.isRequired,
};

export default props => useMemo(() => <PokemonItem {...props} />, [props]);
