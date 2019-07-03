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

    const species = await httpClient.get(`${this.basePath}-species/${speciesName}`);

    const { data: { names, color: { name: baseColor } } } = species;
    const pokemonName = names.find(info => info.language.name === 'en').name;
    const pokemonNumber = `00${pokemonId}`.slice(-ID_DIGITS);

    const wikiDataResponse = await wikiClient.page(`${pokemonName}${POKEMON_PAGE_SUFFIX}`);

    const image = await this.fetchPokemonImage(pokemonName, wikiDataResponse);
    const biology = await this.fetchPokemonBiology(wikiDataResponse);

    return {
      ...response.data,
      baseColor,
      defaultImage: image || frontDefault,
      pokemonNumber,
      biology: biology.content,
    };
  }

  fetchPokemonImage = async (pokemonName, wikiDataResponse) => {
    const response = await httpClient.get(wikiDataResponse.raw.canonicalurl, {
      baseUrl: '',
      responseType: 'text',
    });
    const html = response.data;

    const parsedName = pokemonName.replace('’', '&#39;');
    const findImage = `<img alt="${parsedName}" src="`;

    const start = html.indexOf(findImage) + findImage.length;
    const end = html.indexOf('"', start);

    if (start < 0) {
      return null;
    }

    const parsedImage = html.slice(start, end);

    return `http:${parsedImage}`;
  }

  fetchPokemonBiology = async (wikiDataResponse) => {
    const wikiContent = await wikiDataResponse.content();
    const biology = wikiContent.find(section => section.title.includes(POKEMON_BIO_CONTENT));

    return biology || '';
  }
}

export default new PokemonController();
