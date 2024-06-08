import { MutationAddPokemonArgs, Pokemon, Resolvers } from "./__generated__/types-resolver"
import { pokemons } from "./mock-data"



export const resolvers: Resolvers = {
    Query: {
        info: () => `This is the API of a Pokemon database`,
        allPokemons: () => pokemons
    } as Resolvers['Query'],
    Pokemon: {
        id: (parent: Pokemon) => parent.id,
        name: (parent: Pokemon) => parent.name,
        age: (parent: Pokemon) => parent.age
    } as Resolvers['Pokemon'],
    Mutation: {
        addPokemon: (_parent: unknown, args: MutationAddPokemonArgs): Pokemon => {
            let idCount = pokemons.length + 1

            const pokemon: Pokemon = {
                id: `${idCount++}`,
                name: args.name,
                age: args.age
            }

            pokemons.push(pokemon)

            return pokemon
        },
    } as Resolvers['Mutation']
}
