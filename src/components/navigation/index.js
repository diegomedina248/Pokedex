import { FluidNavigator } from 'react-navigation-fluid-transitions';
import { createAppContainer } from 'react-navigation';

import PokedexLoading from 'components/PokedexLoading';
import Pokedex from 'components/Pokedex';
import Pokemon from 'components/Pokemon';
import PokedexError from 'components/PokedexError';

const AppStack = FluidNavigator({
  PokedexLoading,
  Pokedex,
  Pokemon,
  PokedexError,
});

export default createAppContainer(AppStack);
