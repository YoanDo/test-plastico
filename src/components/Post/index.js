import React from 'react';
import { array, string } from 'prop-types';
import { PortableText } from '@portabletext/react';
import { Container } from 'reactstrap';
import { ContentWrapper, PostBanner, PostTitle, PostWrapper } from './styles';
import getSanityImageUrl from '../../helpers/getSanityImageUrl';
import PostThumbnailList from '../../containers/PostThumbnailList';
import { Wrapper } from '../../hoc/layout/styles';

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={getSanityImageUrl(value)
            .width(320)
            .height(240)
            .fit('max')
            .auto('format')}
        />
      );
    }
  }
};

const Post = ({ title, bannerUrl, body, id }) => (
  <PostWrapper>
    <PostBanner url={bannerUrl} />
    <Wrapper>
      <Container>
        <ContentWrapper>
          <PostTitle>{title}</PostTitle>
          <PortableText value={body} components={ptComponents} />
        </ContentWrapper>
      </Container>
      <PostThumbnailList activePostId={id} />
    </Wrapper>
  </PostWrapper>
);

Post.propTypes = {
  title: string,
  bannerUrl: string,
  body: array,
  id: string
};

export default React.memo(Post);
