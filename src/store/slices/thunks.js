import { setPokemons } from "./pokemonSlice";

export const getPokemons = ( name ) => {
    return async( dispatch, getState) => {

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${ name }/`);
        const data = await resp.json();

        dispatch( setPokemons({ pokemonStats: data.stats , name: data.name, pokemonData: data   }))
    }
}