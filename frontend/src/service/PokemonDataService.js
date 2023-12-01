//Kadeem Lewis
//ksl29
//12-01-2023
//IT301 - 001
//Unit 11 Assignment

const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export async function getPokedex() {
  try {
    const response = await fetch(`${baseUrl}/api/v1/ksl29/pokemon`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getPokemon(pokemonId) {
  try {
    const response = await fetch(
      `${baseUrl}/api/v1/ksl29/pokemon?_id=${pokemonId}`,
    );
    const data = await response.json();
    console.log("Pokemon", data);
    return data.results[0];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getComments(pokemon) {
  try {
    const response = await fetch(
      `${baseUrl}/api/v1/ksl29/comments?pokemonId=${pokemon}`,
    );
    const data = await response.json();
    console.log("Comments", data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
