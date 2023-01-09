/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import { string } from 'prop-types';
import { getAllPosts } from '../redux/selectors/posts';
import { getAllPosts as fetchAllPost } from '../services/posts';
import getSanityImageUrl from '../helpers/getSanityImageUrl';
import PostThumbnail from '../components/PostThumbnail';
import truncateText from '../helpers/truncateText';
import { getUserLanguage } from '../redux/selectors/ui';

const PostThumbnailList = ({ activePostId }) => {
  const posts = useSelector((state) => getAllPosts(state));
  const userLanguage = useSelector((state) => getUserLanguage(state));
  const isUserFrench = userLanguage === 'fr';

  if (!posts.length) {
    fetchAllPost();
    return <>loading...</>;
  }
  const slicedPosts = posts.filter((p) => p._id !== activePostId).slice(0, 6);
  const postsToDisplay = activePostId ? slicedPosts : posts;

  return (
    <Container>
      <Row>
        {postsToDisplay.map((post) => {
          const {
            title_fr,
            title_en,
            body_fr,
            body_en,
            _createdAt: creationDate,
            _id: id,
            slug,
            illustration
          } = post;
          // todo ajouter fallback
          const thumbnailUrl =
            getSanityImageUrl(illustration).width(400).url() || 'null';

          const title = isUserFrench ? title_fr : title_en;
          const body = isUserFrench ? body_fr : body_en;
          const description = body[0]?.children?.[0]?.text;
          const articleSlug = slug.current;

          if (!title || !creationDate || !thumbnailUrl || !description)
            return null;

          return (
            <Col md="4" key={id} className="my-2">
              <PostThumbnail
                creationDate={creationDate}
                description={truncateText(description, 140)}
                imageUrl={thumbnailUrl}
                slug={articleSlug}
                title={truncateText(title, 80)}
                id={id}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

PostThumbnailList.propTypes = {
  activePostId: string
};

export default React.memo(PostThumbnailList);
