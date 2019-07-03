export const getPokemonInfo = state => state.pokemon;

export const getPokemonList = state => getPokemonInfo(state).elements;

export const getPokemon = (state, id) => getPokemonList(state).find(item => item.id === id);
