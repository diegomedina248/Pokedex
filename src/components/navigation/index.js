import { FluidNavigator } from 'react-navigation-fluid-transitions';
import { createAppContainer } from 'react-navigation';

import Pokedex from 'components/Pokedex';
import Pokemon from 'components/Pokemon';

const AppStack = FluidNavigator({
  Pokedex,
  Pokemon,
});

export default createAppContainer(AppStack);
