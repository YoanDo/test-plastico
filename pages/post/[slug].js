import React from 'react';
import Footer from '../../src/components/Footer';
import Post from '../../src/containers/post';
import withLayout from '../../src/hoc/layout';

const PostPage = () => (
  <>
    <Post />
    <Footer />
  </>
);

export default React.memo(withLayout(PostPage));
