import httpClient from './HttpClient';

const POKEMON_LIMIT = 24;

class PokemonController {
  constructor() {
    this.basePath = 'pokemon';
  }

  fetchPokemonList = async () => {
    const response = await httpClient.get(`${this.basePath}/`, {
      params: {
        limit: POKEMON_LIMIT,
      },
    });
    const colors = await this.fetchPokemonColors();

    const pokemonResources = response.data.results.map(({ name }) => this.fetchPokemon(name));
    const pokemonResponses = await Promise.all(pokemonResources);

    const pokemonList = pokemonResponses.map(pokemon => ({
      ...pokemon,
      baseColor: this.getColorForPokemon(pokemon, colors),
    }));

    return pokemonList;
  };

  fetchPokemon = async (id) => {
    const response = await httpClient.get(`${this.basePath}/${id}`);

    return response.data;
  }

  fetchPokemonColors = async () => {
    const list = await httpClient.get(`${this.basePath}-color/`);

    const colors = list.data.results.map(item => item.name);
    const colorResources = colors.map(color => this.fetchPokemonColor(color));
    const colorsResponse = await Promise.all(colorResources);

    return colorsResponse;
  }

  fetchPokemonColor = async (id) => {
    const response = await httpClient.get(`${this.basePath}-color/${id}`);

    return {
      name: id,
      species: response.data.pokemonSpecies,
    };
  }

  getColorForPokemon = (pokemon, colors) => {
    const isColor = current => !!current.species.find(item => item.name === pokemon.name);
    const color = colors.find(isColor);

    return color && color.name;
  }
}

export default new PokemonController();
