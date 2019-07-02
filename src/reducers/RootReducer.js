import { combineReducers } from 'redux';

import error from './ErrorReducer';
import status from './StatusReducer';
import pokemon from './PokemonReducer';

const rootReducer = combineReducers({
  error,
  status,
  pokemon,
});

export default rootReducer;
