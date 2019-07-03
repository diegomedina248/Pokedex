import React, { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import PokemonItem from './components/PokemonItem';
import { POKEMON } from 'helpers/Screens';
import { POKEMON_ID } from 'helpers/ScreenParams';
import PokedexHeader from 'components/common/PokedexHeader';
import LoadingIndicator from 'components/common/LoadingIndicator';

import { fetchPokemonList, actionTypes } from 'actions/PokemonActions';
import { getPokemonInfo } from 'selectors/PokemonSelectors';
import { useCustomBackAction } from 'hooks/NavigationHooks';
import { usePaginatedElements } from 'hooks/PaginatedHooks';

const COLUMNS = 2;

const Pokedex = ({ navigation }) => {
  useCustomBackAction(navigation, () => true);
  const { currentElements, hasMorePages, nextPage } = usePaginatedElements(
    actionTypes.FETCH_POKEMON_LIST,
    getPokemonInfo,
    fetchPokemonList,
  );

  const keyExtractor = item => `${item.id}`;
  const onPress = id => navigation.navigate(POKEMON, {
    [POKEMON_ID]: id,
  });
  const onEndReached = useCallback(() => {
    if (hasMorePages) {
      nextPage();
    }
  }, [hasMorePages, nextPage]);

  const renderItem = ({ item }) => (
    <PokemonItem
      onPress={onPress}
      {...item}
    />
  );

  const renderFooter = () => hasMorePages && (
    <View style={styles.listLoadingContainer}>
      <LoadingIndicator style={styles.listLoadingImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <PokedexHeader />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          numColumns={COLUMNS}
          data={currentElements}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          columnWrapperStyle={styles.rowContainer}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={renderFooter()}
          onEndReached={onEndReached}
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
