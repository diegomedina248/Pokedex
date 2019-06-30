import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles';
import PokemonItem from './PokemonItem';
import { POKEMON } from 'helpers/Screens';
import { POKEMON_ID } from 'helpers/ScreenParams';
import { fetchPokemonList } from 'actions/PokemonActions';

import { getPokemonList } from 'selectors/PokemonSelectors';

const COLUMNS = 2;

const Pokedex = ({ navigation }) => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(getPokemonList);

  useEffect(() => {
    dispatch(fetchPokemonList);
  }, [dispatch]);

  const keyExtractor = item => `${item.id}`;
  const onPress = id => navigation.navigate(POKEMON, {
    [POKEMON_ID]: id,
  });

  const renderItem = ({ item }) => (
    <PokemonItem
      onPress={onPress}
      {...item}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={COLUMNS}
        data={pokemonList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        columnWrapperStyle={styles.rowContainer}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

Pokedex.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Pokedex;
