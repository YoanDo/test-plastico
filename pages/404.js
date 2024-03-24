import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import withLayout from '../src/hoc/layout';
import Footer from '../src/components/Footer';
import Post from '../src/containers/Post';

const Data = () => {
  const router = useRouter();
  const [postSlug, setPostSlug] = useState(null);

  useEffect(() => {
    // S'assurer que le code s'exécute côté client
    if (typeof window !== 'undefined') {
      const completeUrl = window.location.pathname;
      const urlSegments = completeUrl.split('/');
      const postIndex = urlSegments.indexOf('post');

      if (postIndex !== -1 && urlSegments.length > postIndex + 1) {
        setPostSlug(urlSegments[postIndex + 1]);
      } else {
        // Redirection vers la page d'accueil si pas un slug de post
        router.push('/');
      }
    }
  }, [router]);

  if (postSlug) {
    return (
      <>
        <Post defaultSlug={postSlug} />
        <Footer />
      </>
    );
  }

  // Rendre un contenu par défaut si aucun slug de post
  return <div>Loading...</div>;
};

export default withLayout(Data);
