import viteLogo from '/vite.svg'
import codegenLogo from './assets/codegen.svg'
import yogaLogo from './assets/yoga.svg'
import './App.css'
import { AllPokemonsList } from './components/all-pokemons-query-document'
import { AddPokemonForm } from './components/add-pokemon-mutation'

function App() {

  return (
    <>
      <div>
        <a href="https://the-guild.dev/graphql/yoga" target="_blank">
          <img src={yogaLogo} className="logo" alt="GraphQL Yoga logo" />
        </a>
        <a href="https://the-guild.dev/graphql/codegen" target="_blank">
          <img src={codegenLogo} className="logo" alt="GraphQL Codegen logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>GraphQL Yoga + GraphQL Codegen + Vite</h1>
      <AllPokemonsList />
      <AddPokemonForm />
    </>
  )
}

export default App
