import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../counter/counterSlice";
import { pokemonSlice } from "/src/store/pokemon/index.js"

export const store = configureStore({
    reducer: { 
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer
    
    },
})