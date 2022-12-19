import React from 'react';
import Footer from '../../src/components/Footer';
import Post from '../../src/containers/Post';
import withLayout from '../../src/hoc/layout';

const PostPage = () => (
  <>
    <Post />
    <Footer />
  </>
);

export default React.memo(withLayout(PostPage));
