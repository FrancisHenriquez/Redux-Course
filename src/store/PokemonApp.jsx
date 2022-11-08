import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from './pokemon/thunks'

export const PokemonApp = () => {
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch( getPokemons())
  })

useEffect(() => {


  return () => {
   
  }
}, [])




  return (
   <>
   <h1>PokemonApp</h1>
   <hr />
   <ul>
        <li>Hola</li>
        <li>Hola</li>
   </ul>
   
   </>
  )
}
