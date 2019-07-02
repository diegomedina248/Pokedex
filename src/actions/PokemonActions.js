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

const fetchPokemonListSuccess = pokemonList => ({
  type: actionTypes.FETCH_POKEMON_LIST_SUCCESS,
  pokemonList,
});

export const fetchPokemonList = async (dispatch) => {
  dispatch(fetchPokemonListRequest());
  try {
    const pokemonList = await pokemonController.fetchPokemonList();
    dispatch(fetchPokemonListSuccess(pokemonList));
  } catch (error) {
    dispatch(fetchPokemonListError(error));
  }
};
