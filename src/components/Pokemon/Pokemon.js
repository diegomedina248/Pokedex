import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import PokemonHeader from './PokemonHeader';
import { baseStyles as styles } from './styles';

import colors from 'helpers/PokemonColors';
import { POKEMON_ID } from 'helpers/ScreenParams';
import { getPokemon } from 'selectors/PokemonSelectors';

const Pokemon = ({ navigation }) => {
  const id = navigation.getParam(POKEMON_ID, 0);
  const pokemon = useSelector(state => getPokemon(state, id));
  const pokemonColors = colors[pokemon.baseColor];

  const outerStyles = {
    backgroundColor: pokemonColors.primary,
  };

  const innerStyles = {
    borderColor: pokemonColors.secondary,
  };

  const onBackPress = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <PokemonHeader
        onBackPress={onBackPress}
        {...pokemon}
      />
      <View style={[styles.contentOuterContainer, outerStyles]}>
        <View style={[styles.contentInnerContainer, innerStyles]}>
          <Text>a</Text>
        </View>
      </View>
    </View>
  );
};

Pokemon.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Pokemon;
