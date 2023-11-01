import fs from "fs/promises";

const query = `query samplePokeAPIquery {
    pokemon_v2_pokemon(where: {id: {_lt: 151}}) {
      name
      id
      height
      weight
      pokemon_v2_pokemonspecy {
        generation_id
        pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}, limit: 1) {
          flavor_text
        }
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }`;

function updatePokemonData(pokemonData) {
  return pokemonData.map((pokemon) => {
    const name = pokemon.name.replaceAll("-", " ");

    const generation = pokemon.pokemon_v2_pokemonspecy.generation_id;
    const flavorText =
      pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text
        .replaceAll("\n", " ")
        .replaceAll("\f", " ");
    const types = pokemon.pokemon_v2_pokemontypes.map(
      (type) => type.pokemon_v2_type.name
    );
    if (types.length === 1) {
      types.push("none");
    }
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    return {
      id: pokemon.id,
      name,
      generation,
      types,
      sprite,
      flavorText,
      height: pokemon.height,
      weight: pokemon.weight,
    };
  });
}

async function fetchPokemon() {
  try {
    const response = await fetch("https://beta.pokeapi.co/graphql/v1beta", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const { data } = await response.json();
    if (data && data.pokemon_v2_pokemon) {
      const transformedData = updatePokemonData(data.pokemon_v2_pokemon);

      await fs.writeFile(
        "../src/data/pokemonData.json",
        JSON.stringify(transformedData, null, 2)
      );
      console.log("Data saved to pokemonData.json");
    } else {
      console.error("Failed to fetch Pokemon data");
    }
  } catch (error) {
    console.error(error);
  }
}

fetchPokemon();
