import Link from 'next/link';
import React from 'react';
import {
  CardBanner,
  ContentWrapper,
  DateText,
  PreText,
  Title,
  Wrapper
} from './styles';

const PostThumbnail = ({
  title,
  description,
  imageUrl,
  creationDate,
  slug
}) => {
  const formattedDate = new Date(creationDate).toLocaleDateString('fr');

  return (
    <Link href={`/post/${slug}`}>
      <Wrapper>
        <CardBanner url={imageUrl} />
        <ContentWrapper>
          <Title>{title}</Title>
          <DateText>{formattedDate}</DateText>
          <PreText>{description}</PreText>
        </ContentWrapper>
      </Wrapper>
    </Link>
  );
};

PostThumbnail.propTypes = {};

export default React.memo(PostThumbnail);
