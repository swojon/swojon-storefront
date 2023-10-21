
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.swojon.com/graphql",
  documents: "graphql/**/*.graphql",
  generates: {
    "gql/": {
      preset: "client",
      plugins: [
      ]
    },
    "apollograph/generated.ts":{
      plugins:[
        "typescript-react-apollo", 'typescript', 'typescript-operations'
      ]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
