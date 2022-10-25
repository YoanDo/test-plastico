import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: "uxy4ji2d",
  dataset: "production",
  useCdn: false
});

export default sanityClient