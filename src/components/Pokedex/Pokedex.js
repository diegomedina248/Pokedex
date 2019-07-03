import React, { useCallback, useRef } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
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
import { isLoadingSelector } from 'selectors/StatusSelectors';

const COLUMNS = 2;

const Pokedex = ({ navigation }) => {
  let onEndReachedCalledDuringMomentum = useRef(true).current;
  const isLoading = useSelector(state => (
    isLoadingSelector([actionTypes.FETCH_POKEMON_LIST], state)
  ));

  useCustomBackAction(navigation, () => true);
  const { currentElements, hasMorePages, nextPage } = usePaginatedElements(
    actionTypes.FETCH_POKEMON_LIST,
    getPokemonInfo,
    fetchPokemonList,
  );

  const keyExtractor = item => `${item.id}`;
  const onPress = (id) => {
    if (isLoading) {
      return;
    }

    navigation.navigate(POKEMON, {
      [POKEMON_ID]: id,
    });
  };

  const onMomentumScrollBegin = () => {
    onEndReachedCalledDuringMomentum = false;
  };
  const onEndReached = useCallback(() => {
    if (!onEndReachedCalledDuringMomentum) {
      nextPage();
      onEndReachedCalledDuringMomentum = true;
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
          onEndReachedThreshold={0.5}
          onEndReached={onEndReached}
          onMomentumScrollBegin={onMomentumScrollBegin}
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
