import { useQuery } from "urql";
import { graphql } from "../__generated__/gql";

// This is the GraphQL query that we will send to the server
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
  // We use useQuery from urql to fetch the data
  const [result] = useQuery({ query: allPokemonsQueryDocument })
  // Hover on const allPokemons to see the type!
  const allPokemons = result.data?.allPokemons

  return (
    <div>
      <h3>All Pokemons List GraphQL Query</h3>
      <table style={{
        margin: "auto",
        width: "50%",
        border: "1px solid black",
        padding: "10px",
        textAlign: "center",
      }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {allPokemons?.map((pokemon) => (
            <tr key={pokemon.id}>
              <td>{pokemon.id}</td>
              <td>{pokemon.name}</td>
              <td>{pokemon.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}