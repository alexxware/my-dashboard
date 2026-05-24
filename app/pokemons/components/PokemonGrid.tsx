import { SimplePokemon } from "../interfaces/simple-pokemon"
import { PokemonCard } from "./PokemonCard"

interface Props {
    pokemons: SimplePokemon[]
}
export function PokemonGrid({pokemons}: Props) {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
        {
          pokemons.map(pokemon => (
            // <Image
            //   key={pokemon.id}
            //   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            //   width={100}
            //   height={100}
            //   alt={pokemon.name} />

              //<span key={pokemon.id}>{pokemon.name}</span>
              <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))
        }
      </div>
  )
}
