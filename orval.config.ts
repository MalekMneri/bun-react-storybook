import { defineConfig } from 'orval';

export default defineConfig({
  'pet-store-file': {
    input: {
      target: 'https://petstore.swagger.io/v2/swagger.json',
    },
    output: {
      mode: 'tags-split', // generates one file per tag
      target: 'src/api', // <-- directory (not a file)
      client: 'react-query',
      mock: true, // generates mock handlers
    },
  },
});
