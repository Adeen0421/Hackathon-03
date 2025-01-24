import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId:'1c0z1rb2',  // Your Sanity project ID
  dataset:'production',      // Your Sanity dataset name
  apiVersion: '2023-01-01',                             // Specify your API version
  useCdn: true                                           // Use the CDN for faster responses
});

export default sanityClient;
