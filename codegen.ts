import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./backend/src/schema.graphql",
  documents: "./client/src/**/*.tsx",
  ignoreNoDocuments: true,
  generates: {
    "./client/src/gql/": {
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