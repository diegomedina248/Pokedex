import createReducer from './CreateReducer';
import { actionTypes } from 'actions/PokemonActions';

const initialState = {
  pokemonList: [],
};

const fetchPokemonListRequest = state => ({
  ...state,
});

const fetchPokemonListSuccess = (state, action) => ({
  ...state,
  pokemonList: action.pokemonList,
});

const handlers = {
  [actionTypes.FETCH_POKEMON_LIST_REQUEST]: fetchPokemonListRequest,
  [actionTypes.FETCH_POKEMON_LIST_SUCCESS]: fetchPokemonListSuccess,
};

export default createReducer(initialState, handlers);
