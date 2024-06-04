import { Pokemon, Resolvers } from "./__generated__/types-resolver"

const pokemons: Pokemon[] = [
    {
        id: '1',
        name: 'Pikachu',
        age: 1
    }
]

export const resolvers: Resolvers = {
    Query: {
        info: () => `This is the API of a Pokemon database`,
        allPokemons: () => pokemons
    },
    Pokemon: {
        id: (parent: Pokemon) => parent.id,
        name: (parent: Pokemon) => parent.name,
        age: (parent: Pokemon) => parent.age
    },
    Mutation: {
        addPokemon: (_parent: unknown, args: { name: string, age: number }): Pokemon => {
            let idCount = pokemons.length

            const pokemon: Pokemon = {
                id: `${idCount++}`,
                name: args.name,
                age: args.age
            }

            pokemons.push(pokemon)

            return pokemon
        },
    }
}
