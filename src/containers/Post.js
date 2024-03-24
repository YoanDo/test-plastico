/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { getPostBySlug } from '../services/posts';
import PostComponent from '../components/Post';
import { getUserLanguage } from '../redux/selectors/ui';
import getSanityImageUrl from '../helpers/getSanityImageUrl';

const Post = ({ defaultSlug }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [postDetails, setPostDetails] = useState({});
  const userLanguage = useSelector((state) => getUserLanguage(state));
  const isUserFrench = userLanguage === 'fr';

  const { slug } = router.query;

  useEffect(() => {
    getPostBySlug(defaultSlug || slug).then(({ props }) => {
      setPostDetails(props.post[0]);
      setIsLoading(false);
    });
  }, [slug]);

  // todo change for skeleton
  if (isLoading || !postDetails) return <>loading ...'</>;

  const {
    body_en,
    body_fr,
    illustration,
    title_en,
    title_fr,
    publishedAt,
    _id: id
  } = postDetails;
  const title = isUserFrench ? title_fr : title_en;
  const body = isUserFrench ? body_fr : body_en;
  const imageUrl = getSanityImageUrl(illustration).width(1200).url() || 'null';
  const publicationDate = new Date(publishedAt).toLocaleDateString('fr');

  return (
    <PostComponent
      bannerUrl={imageUrl}
      body={body}
      id={id}
      publicationDate={publicationDate}
      title={title}
    />
  );
};

Post.propTypes = {};

export default React.memo(Post);
