import { Pokemon, Resolvers } from "./__generated__/types-resolver"
import { pokemons } from "./mock-data"


export const resolvers: Resolvers = {
    Query: {
        info: () => 'This is the API of a Pokemon database',
        allPokemons: () => pokemons
    },
    Pokemon: {
        id: (parent) => parent.id,
        name: (parent) => parent.name,
        age: (parent) => parent.age
    },
    Mutation: {
        addPokemon(_parent, args) {
            const pokemon: Pokemon = {
                id: `${pokemons.length}`,
                name: args.name,
                age: args.age
            }

            pokemons.push(pokemon)

            return pokemon
        },
    }
}
