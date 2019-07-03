import React from 'react';
import { View, Text, Animated } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';

import styles from '../styles';
import colors from 'helpers/PokemonColors';

import pokeballIcon from 'assets/ic_pokeball/ic_pokeball.png';
import Chip from 'components/common/Chip';
import CustomTouchable from 'components/common/CustomTouchable';

const MAX_TYPES = 2;

const PokemonItem = ({
  id,
  name,
  baseColor,
  defaultImage,
  pokemonNumber,
  types,
  onPress,
}) => {
  const handlePress = () => onPress(id);

  const pokemonColors = colors[baseColor];
  const wrapperStyles = {
    backgroundColor: pokemonColors.primary,
    borderColor: pokemonColors.secondary,
  };

  const typeChips = types.slice(0, MAX_TYPES).map(type => (
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

  const renderView = (value) => {
    const rotateValue = value.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '100deg'],
    });

    return (
      <View
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
        <Animated.Image
          style={[
            {
              transform: [{ rotate: rotateValue }],
            },
            styles.itemImageBackground,
          ]}
          source={pokeballIcon}
        />
        <Transition shared={`image-${id}`}>
          <View style={styles.itemImageContainer}>
            <FastImage
              source={{ uri: defaultImage }}
              style={styles.itemImage}
            />
          </View>
        </Transition>
      </View>
    );
  };

  return (
    <CustomTouchable
      onPress={handlePress}
      render={renderView}
    />
  );
};

PokemonItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  baseColor: PropTypes.string.isRequired,
  defaultImage: PropTypes.string.isRequired,
  pokemonNumber: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.shape({
      type: PropTypes.string,
    }),
  })).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default PokemonItem;
