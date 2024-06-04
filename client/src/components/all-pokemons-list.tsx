import { useQuery } from "urql";
import { graphql } from "../gql/gql";

const allPokemonsQueryDocument = graphql(/* GraphQL */ `
  query AllPokemonsList{
  allPokemons {
    id
    name
    age
  }
}
`)

export function AllPokemonsList() {
  const [result] = useQuery({ query: allPokemonsQueryDocument })

  const allPokemons = result.data?.allPokemons

  return (
    <div>
      <h1>All Pokemons</h1>
    </div>
  );
}