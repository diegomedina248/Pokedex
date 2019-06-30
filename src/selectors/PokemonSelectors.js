export const getPokemonList = state => state.pokemon.pokemonList;

export const getPokemon = (state, id) => getPokemonList(state).find(item => item.id === id);
