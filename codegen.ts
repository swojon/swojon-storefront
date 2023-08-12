
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3005/graphql",
  documents: "graphql/**/*.graphql",
  generates: {
    "gql/": {
      preset: "client",
      plugins: [
      ]
    },
    "apollograph/generated.ts":{
      plugins:[
        "typescript-react-apollo"
      ]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
