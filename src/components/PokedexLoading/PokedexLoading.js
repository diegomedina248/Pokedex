import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Transition } from 'react-navigation-fluid-transitions';

import styles from './styles';
import PokemonBottom from './components/PokedexBottom';
import PokedexLoadingIndicator from './components/PokedexLoadingIndicator';
import PokedexBottomHandle from './components/PokedexBottomHandle';
import PokedexRightHandle from './components/PokedexRightHandle';
import PokedexHeader, { HEIGHT } from 'components/common/PokedexHeader';

import { fetchPokemonList, actionTypes } from 'actions/PokemonActions';
import { globalReset } from 'actions/GlobalActions';
import { POKEDEX } from 'helpers/Screens';
import { successSelector } from 'selectors/StatusSelectors';
import { useIntermittent } from 'hooks/AnimationHooks';

const ANIMATION_DELAY = 100;

const PokedexLoading = ({ navigation }) => {
  const dispatch = useDispatch();
  const finishedLoading = useSelector(state => (
    successSelector([actionTypes.FETCH_POKEMON_LIST], state)
  ));

  const intermittent = useIntermittent(ANIMATION_DELAY);
  const [opacity, setOpacity] = useState(1);
  const listenerId = intermittent.addListener(({ value }) => setOpacity(value));

  useEffect(() => {
    if (finishedLoading) {
      dispatch(globalReset());
      intermittent.removeListener(listenerId);
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
      <Transition appear={appearStatic} disappear={disappearFade}>
        <View style={styles.backgroundContainer} />
      </Transition>
      <Transition appear={appearStatic}>
        <PokedexHeader />
      </Transition>
      <Transition disappear="bottom">
        <View>
          <PokemonBottom aboveHeight={HEIGHT} />
          <PokedexLoadingIndicator
            aboveHeight={HEIGHT}
            opacity={opacity}
          />
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
