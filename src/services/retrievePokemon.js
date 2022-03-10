const baseUrl = "https://pokeapi.co/api/v2"
const query = {
    pokemon: "pokemon",
    encounters: "encounters"
}

export async function fetchPokmemon(pokemon) {
    return fetch(`${baseUrl}/${query.pokemon}/${pokemon}/${query.encounters}`)
}