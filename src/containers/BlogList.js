import React from 'react';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../redux/selectors/posts';


const BlogList = () => {
  const posts = useSelector((state) => getAllPosts(state))

  if (!posts.length) return "loading"

  return (
    <div>
      {posts.map((post) => {
        const { title_fr } = post
        return (<h1>{title_fr}</h1>)
      })}
    </div>
  );
};

BlogList.propTypes = {

};

export default BlogList;