import { FluidNavigator } from 'react-navigation-fluid-transitions';
import { createAppContainer } from 'react-navigation';

import PokedexLoading from 'components/PokedexLoading';
import Pokedex from 'components/Pokedex';
import Pokemon from 'components/Pokemon';

const AppStack = FluidNavigator({
  PokedexLoading,
  Pokedex,
  Pokemon,
});

export default createAppContainer(AppStack);
