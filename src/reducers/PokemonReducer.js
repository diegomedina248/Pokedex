import createReducer from './CreateReducer';
import { actionTypes } from 'actions/PokemonActions';

const initialState = {
  elements: [],
  count: 0,
};

const fetchPokemonListRequest = state => ({
  ...state,
});

const fetchPokemonListSuccess = (state, action) => ({
  ...state,
  elements: [
    ...state.elements,
    ...action.elements,
  ],
  count: action.count,
});

const handlers = {
  [actionTypes.FETCH_POKEMON_LIST_REQUEST]: fetchPokemonListRequest,
  [actionTypes.FETCH_POKEMON_LIST_SUCCESS]: fetchPokemonListSuccess,
};

export default createReducer(initialState, handlers);
