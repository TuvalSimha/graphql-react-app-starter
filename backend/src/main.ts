
import { createSchema } from 'graphql-yoga'
import { resolvers } from './resolvers'
import { readFileSync } from 'node:fs'
import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'

const typeDefinitions = readFileSync('./src/schema.graphql', 'utf-8')

export const schema = createSchema({
    resolvers: [resolvers],
    typeDefs: [typeDefinitions]
})


function main() {
    const yoga = createYoga({ schema })
    const server = createServer(yoga)
    server.listen(4000, () => {
        console.info('Server is running on http://localhost:4000/graphql')
    })
}

main()