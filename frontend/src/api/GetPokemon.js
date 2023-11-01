//Kadeem Lewis
//ksl29
//10-06-2023
//IT301 - 001
//Unit 03 Assignment

export async function getPokedex() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getPokemon(pokemon) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const data = await response.json();
    const additionalResponse = await fetch(data.species.url);
    const additionalData = await additionalResponse.json();

    const flavorText = additionalData.flavor_text_entries.find(
      (text) => text.language.name === "en"
    ).flavor_text;

    return { ...data, flavorText };
  } catch (error) {
    console.error(error);
    return null;
  }
}
