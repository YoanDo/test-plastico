import React from 'react';
import { array, string } from 'prop-types';
import { PortableText } from '@portabletext/react';
import { ContentWrapper, PostBanner, PostTitle, PostWrapper } from './styles';
import getSanityImageUrl from '../../helpers/getSanityImageUrl';

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

const Post = ({ title, bannerUrl, body }) => (
  <PostWrapper>
    <PostBanner url={bannerUrl} />
    <ContentWrapper>
      <PostTitle>{title}</PostTitle>
      <PortableText value={body} components={ptComponents} />
    </ContentWrapper>
  </PostWrapper>
);

Post.propTypes = {
  title: string,
  bannerUrl: string,
  body: array
};

export default React.memo(Post);
