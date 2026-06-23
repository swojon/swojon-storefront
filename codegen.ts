
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3005/graphql",
  documents: "graphql/**/*.graphql",
  generates: {
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
