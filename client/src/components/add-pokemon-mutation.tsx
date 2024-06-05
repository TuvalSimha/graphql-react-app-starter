/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { graphql } from "../gql/gql";
import { useMutation } from "urql";


const AddPokemonMutation = graphql(/* GraphQL */ `
    mutation AddOnePokemonMutation($name: String!, $age: Int!) {
        addPokemon(name: $name, age: $age) {
        id
        name
        age
    }
}
`)

export function AddPokemonForm() {
    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<number>(0)
    const [errorMessages, setErrorMessages] = useState<string[]>([])
    const [addPokemonResult, addPokemon] = useMutation(AddPokemonMutation)

    const handleAddPokemon = async () => {
        if (!name || !age) {
            setErrorMessages(['Name and Age are required'])
            return
        }
        const result = await addPokemon({ name, age })
        if (result.error) {
            console.error('Failed to add pokemon', result.error)
        } else {
            setAge(0)
            setName('')
            console.log('Pokemon added successfully', result.data)
            console.log('addPokemonResult is', addPokemonResult)
        }
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
        }}>
            <h3>Add Pokemon Mutation</h3>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="age">Age</label>
            <input
                type="number"
                placeholder="Age"
                required
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value))}
            />
            {errorMessages.map((message) => (
                <h4 key={message} style={{ color: "red" }}>{message}</h4>
            ))}
            <button onClick={handleAddPokemon}>Add Pokemon</button>
        </div>
    );
}