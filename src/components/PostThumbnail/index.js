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
  id,
  slug
}) => {
  const formattedDate = new Date(creationDate).toLocaleDateString('fr');

  return (
    <Link href={`/post/${slug}`}>
      <Wrapper>
        <CardBanner url={imageUrl} />
        <ContentWrapper>
          <DateText>{formattedDate}</DateText>
          <Title>{title}</Title>
          <PreText>{description}</PreText>
        </ContentWrapper>
      </Wrapper>
    </Link>
  );
};

PostThumbnail.propTypes = {};

export default React.memo(PostThumbnail);
