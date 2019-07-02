import httpClient from './HttpClient';
import wikiClient from './WikiClient';

const POKEMON_LIMIT = 24;
const POKEMON_PAGE_SUFFIX = '_(Pokémon)';
const POKEMON_BIO_CONTENT = 'Biology';

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

    const { data: { name } } = response;
    const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);

    const wikiDataResponse = await wikiClient.page(`${pokemonName}${POKEMON_PAGE_SUFFIX}`);
    const wikiContent = await wikiDataResponse.content();
    const biology = wikiContent.find(section => section.title.includes(POKEMON_BIO_CONTENT));

    if (!biology) {
      return response.data;
    }

    return {
      ...response.data,
      biology: biology.content,
    };
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
