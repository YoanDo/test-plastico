import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: "uxy4ji2d",
  dataset: "production",
  useCdn: false,
  apiVersion: '2022-12-17'
});
