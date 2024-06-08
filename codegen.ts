import type { CodegenConfig } from "@graphql-codegen/cli";

// Read more about GraphQL Codegen here: https://the-guild.dev/graphql/codegen/docs/getting-started

const config: CodegenConfig = {
  schema: "./backend/src/schema.graphql",
  documents: "./client/src/**/*.tsx",
  ignoreNoDocuments: true,
  generates: {
    "./client/src/__generated__/": {
      preset: "client",
    },
    "./backend/src/__generated__/types-resolver.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        useIndexSignature: true,
      },
    },
  },
};

export default config;