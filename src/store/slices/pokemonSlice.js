import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemonData: [],
        pokemonStats: [],
        name: ''
    },
    reducers: {
        setPokemons: (state, action ) => {
            state.pokemonStats = action.payload.pokemon
            state.pokemonData = action.payload.pokemonData
            state.name = action.payload.name
        },
    }
});


// Action creators are generated for each case reducer function
export const { setPokemons } = pokemonSlice.actions;