import React from 'react'
import { CardBanner, ContentWrapper, DateText, PreText, Title, Wrapper } from './styles'

const ArticleCard = ({ title, description, imageUrl, creationDate }) => {
  const formattedDate = new Date(creationDate).toLocaleDateString("fr")

  return (
    <Wrapper>
      <CardBanner url={imageUrl} />
      <ContentWrapper>
        <DateText>{formattedDate}</DateText>
        <Title>{title}</Title>
        <PreText>{description}</PreText>
      </ContentWrapper>
    </Wrapper>
  );
};

ArticleCard.propTypes = {

};

export default ArticleCard;