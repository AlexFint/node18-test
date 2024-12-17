const URI = 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20';
const URI_2 = 'https://pokeapi.co/api/v2/ability/'

/**
 * Retorna un array de objetos que contienen características de pokemons
 * @returns 
 */
export const getPokemon = async () => {
    const pokemons = await fetch(URI);
    const pokes = await pokemons.json();
    let pok = '';
    const arrPoke = [];
    for await (const poke of pokes.results) {
        pok = fetch(`${URI_2}${poke.name}`);
        pok = pok.json();
        arrPoke.push(pok);
    }
    return arrPoke;
}
  