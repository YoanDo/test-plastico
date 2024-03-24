import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import withLayout from '../src/hoc/layout';
import Footer from '../src/components/Footer';
import Post from '../src/containers/Post';

const Data = () => {
  const router = useRouter();
  const completeUrl = router.asPath;
  const [postSlug, setPostSlug] = useState(null);

  useEffect(() => {
    const urlSegments = completeUrl.split('/');
    const postIndex = urlSegments.indexOf('post');
    if (postIndex !== -1 && urlSegments.length > postIndex + 1) {
      const slug = urlSegments[postIndex + 1];
      setPostSlug(slug);
    }
  }, [completeUrl]);

  if (postSlug) {
    return (
      <>
        <Post defaultSlug={postSlug} />
        <Footer />
      </>
    );
  }

  router.push('/');
};

export default withLayout(Data);
