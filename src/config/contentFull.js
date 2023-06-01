import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.REACT_APP_CONTENTFULL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFULL_TOKEN,
});
