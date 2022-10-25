import sanityClient from "../../client";
import { setPosts } from "../redux/actions";
import store from "../redux/store";

export async function getAllPosts() {
  const posts = await sanityClient.fetch(`*[_type == "post"]`);
  store.dispatch(setPosts(posts))
  return {
    props: {
      posts
    }
  };
}