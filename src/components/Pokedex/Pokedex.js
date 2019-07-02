import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles';
import PokemonItem from './components/PokemonItem';
import { POKEMON } from 'helpers/Screens';
import { POKEMON_ID } from 'helpers/ScreenParams';
import PokedexHeader from 'components/common/PokedexHeader';

import { getPokemonList } from 'selectors/PokemonSelectors';
import { useCustomBackAction } from 'hooks/NavigationHooks';

const COLUMNS = 2;

const Pokedex = ({ navigation }) => {
  const pokemonList = useSelector(getPokemonList);

  useCustomBackAction(navigation, () => true);

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
      <View style={styles.headerContainer}>
        <PokedexHeader />
      </View>
      <View style={styles.listContainer}>
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
    </View>
  );
};

Pokedex.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Pokedex.navigationOptions = () => ({
  gesturesEnabled: false,
});

export default Pokedex;
