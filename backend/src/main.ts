
import { createSchema } from 'graphql-yoga'
import { resolvers } from './resolvers'
import { readFileSync } from 'node:fs'
import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'

// Read more about GraphQL Yoga server here: https://the-guild.dev/graphql/yoga-server/docs

const typeDefinitions = readFileSync('./src/schema.graphql', 'utf8')

export const schema = createSchema({
    resolvers: [resolvers],
    typeDefs: [typeDefinitions]
})


const yoga = createYoga({ schema })
const server = createServer(yoga)
server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
})
