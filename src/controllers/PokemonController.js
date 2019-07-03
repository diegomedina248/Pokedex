import httpClient from './HttpClient';
import wikiClient from './WikiClient';

const POKEMON_LIMIT = 24;
const POKEMON_PAGE_SUFFIX = '_(Pokémon)';
const POKEMON_BIO_CONTENT = 'Biology';
const ID_DIGITS = 3;

class PokemonController {
  constructor() {
    this.basePath = 'pokemon';
  }

  fetchPokemonList = async (offset) => {
    const response = await httpClient.get(`${this.basePath}/`, {
      params: {
        limit: POKEMON_LIMIT,
        offset,
      },
    });

    const pokemonResources = response.data.results.map(({ name }) => this.fetchPokemon(name));
    const pokemonResponses = await Promise.all(pokemonResources);

    return {
      elements: pokemonResponses,
      count: response.data.count,
    };
  };

  fetchPokemon = async (id) => {
    const response = await httpClient.get(`${this.basePath}/${id}`);
    const {
      data: {
        id: pokemonId,
        species: { name: speciesName },
        sprites: { frontDefault },
      },
    } = response;

    try {
      const species = await httpClient.get(`${this.basePath}-species/${speciesName}`);

      const { data: { names, color: { name: baseColor } } } = species;
      const pokemonName = names.find(info => info.language.name === 'en').name;
      const pokemonNumber = `00${pokemonId}`.slice(-ID_DIGITS);

      const wikiDataResponse = await wikiClient.page(`${pokemonName}${POKEMON_PAGE_SUFFIX}`);
      const wikiContent = await wikiDataResponse.content();

      const biology = wikiContent.find(section => section.title.includes(POKEMON_BIO_CONTENT));

      if (!biology) {
        return response.data;
      }

      return {
        ...response.data,
        baseColor,
        defaultImage: frontDefault,
        pokemonNumber,
        biology: biology.content,
      };
    } catch (error) {
      return response.data;
    }
  }
}

export default new PokemonController();
