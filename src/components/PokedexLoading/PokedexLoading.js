import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Transition } from 'react-navigation-fluid-transitions';

import styles from './styles';
import PokemonBottom from './components/PokedexBottom';
import PokedexLoadingIndicator from './components/PokedexLoadingIndicator';
import PokedexBottomHandle from './components/PokedexBottomHandle';
import PokedexRightHandle from './components/PokedexRightHandle';
import PokedexHeader, { HEIGHT } from 'components/common/PokedexHeader';
import strings from 'localization';

import { fetchPokemonList, actionTypes } from 'actions/PokemonActions';
import { globalReset } from 'actions/GlobalActions';
import { POKEDEX, POKEDEX_ERROR } from 'helpers/Screens';
import { ERROR } from 'helpers/ScreenParams';
import { successSelector, hasErrorsSelector } from 'selectors/StatusSelectors';
import { MOJO } from 'helpers/Colors';

const PokedexLoading = ({ navigation }) => {
  const dispatch = useDispatch();
  const hasErrors = useSelector(state => (
    hasErrorsSelector([actionTypes.FETCH_POKEMON_LIST], state)
  ));
  const finishedLoading = useSelector(state => (
    successSelector([actionTypes.FETCH_POKEMON_LIST], state)
  ));

  useEffect(() => {
    if (hasErrors) {
      dispatch(globalReset());
      navigation.navigate(POKEDEX_ERROR, {
        [ERROR]: strings.genericError,
      });
    } else if (finishedLoading) {
      dispatch(globalReset());
      navigation.navigate(POKEDEX);
    }
  });

  useEffect(() => {
    dispatch(fetchPokemonList);
  }, [dispatch]);

  const appearStatic = () => ({
    opacity: 1,
  });

  const disappearFade = ({ progress }) => ({
    opacity: progress.interpolate({
      inputRange: [0, 0.2, 1],
      outputRange: [1, 0, 0],
    }),
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={MOJO} animated />
      <Transition appear={appearStatic} disappear={disappearFade}>
        <View style={styles.backgroundContainer} />
      </Transition>
      <Transition appear={appearStatic}>
        <PokedexHeader />
      </Transition>
      <Transition disappear="bottom">
        <View>
          <PokemonBottom aboveHeight={HEIGHT} />
          <PokedexLoadingIndicator aboveHeight={HEIGHT} />
          <PokedexBottomHandle />
          <PokedexRightHandle aboveHeight={HEIGHT} />
        </View>
      </Transition>
    </View>
  );
};

PokedexLoading.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default PokedexLoading;
