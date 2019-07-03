import pokemonController from 'controllers/PokemonController';

export const actionTypes = {
  FETCH_POKEMON_LIST: 'FETCH_POKEMON_LIST',
  FETCH_POKEMON_LIST_REQUEST: 'FETCH_POKEMON_LIST_REQUEST',
  FETCH_POKEMON_LIST_SUCCESS: 'FETCH_POKEMON_LIST_SUCCESS',
  FETCH_POKEMON_LIST_ERROR: 'FETCH_POKEMON_LIST_ERROR',
};

const fetchPokemonListRequest = () => ({
  type: actionTypes.FETCH_POKEMON_LIST_REQUEST,
});

const fetchPokemonListError = error => ({
  type: actionTypes.FETCH_POKEMON_LIST_ERROR,
  error,
});

const fetchPokemonListSuccess = (elements, count) => ({
  type: actionTypes.FETCH_POKEMON_LIST_SUCCESS,
  elements,
  count,
});

export const fetchPokemonList = (offset = 0) => async (dispatch) => {
  dispatch(fetchPokemonListRequest());
  try {
    const { elements, count } = await pokemonController.fetchPokemonList(offset);
    dispatch(fetchPokemonListSuccess(elements, count));
  } catch (error) {
    dispatch(fetchPokemonListError(error));
  }
};
