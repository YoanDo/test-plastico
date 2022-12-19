/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { getPostBySlug } from '../services/posts';
import PostComponent from '../components/Post';
import { getUserLanguage } from '../redux/selectors/ui';
import getSanityImageUrl from '../helpers/getSanityImageUrl';

const Post = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [postDetails, setPostDetails] = useState({});
  const userLanguage = useSelector((state) => getUserLanguage(state));
  const isUserFrench = userLanguage === 'fr';

  useEffect(() => {
    const { slug } = router.query;
    getPostBySlug(slug).then(({ props }) => {
      setPostDetails(props.post[0]);
      setIsLoading(false);
    });
  }, []);

  // todo change for skeleton
  if (isLoading || !postDetails) return <>loading ...'</>;

  const { body_en, body_fr, illustration, title_en, title_fr } = postDetails;
  const title = isUserFrench ? title_fr : title_en;
  const body = isUserFrench ? body_fr : body_en;
  const imageUrl = getSanityImageUrl(illustration).width(1200).url() || 'null';

  return <PostComponent title={title} bannerUrl={imageUrl} body={body} />;
};

Post.propTypes = {};

export default React.memo(Post);
