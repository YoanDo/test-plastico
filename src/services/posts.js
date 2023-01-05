import sanityClient from '../../client';
import { setPosts } from '../redux/actions';
import state from '../redux/store';

export async function getAllPosts() {
  const posts = await sanityClient.fetch(`*[_type == "post"]`);
  state.dispatch(setPosts(posts));
  return {
    props: {
      posts
    }
  };
}

export async function getPostBySlug(slug) {
  const post = await sanityClient.fetch(`*[slug.current == "${slug}"]`);
  return {
    props: {
      post
    }
  };
}
