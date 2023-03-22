import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../../client';

const builder = imageUrlBuilder(sanityClient);

function getSanityImageUrl(source) {
  return builder.image(source);
}

export default getSanityImageUrl;
