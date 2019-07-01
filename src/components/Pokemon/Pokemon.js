import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import PokemonHeader from './components/PokemonHeader';
import PokemonSize from './components/PokemonSize';
import { baseStyles as styles } from './styles';

import colors from 'helpers/PokemonColors';
import { POKEMON_ID } from 'helpers/ScreenParams';
import { getPokemon } from 'selectors/PokemonSelectors';

const MAX_BIOLOGY_CHARS = 130;
const splitBiology = (biology) => {
  let index = 0;
  let charCount = 0;

  while (charCount < MAX_BIOLOGY_CHARS) {
    charCount = biology.indexOf('.', index);
    index += 1;
  }

  return biology.slice(0, charCount + 1);
};

const Pokemon = ({ navigation }) => {
  const id = navigation.getParam(POKEMON_ID, 0);

  const pokemon = useSelector(state => getPokemon(state, id));
  const {
    baseColor,
    biology,
    weight,
    height,
  } = pokemon;

  const biologyText = splitBiology(biology);
  const pokemonColors = colors[baseColor];

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
          <Text style={styles.biology}>{biologyText}</Text>
          <PokemonSize
            height={height}
            weight={weight}
          />
        </View>
      </View>
    </View>
  );
};

Pokemon.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Pokemon;
