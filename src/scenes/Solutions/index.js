import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

import SolutionsHeader from '../../components/SolutionsHeader';
import PostThumbnailList from '../../containers/PostThumbnailList';
import { Wrapper } from '../../hoc/layout/styles';
import { getAllPosts } from '../../services/posts';
import { GetInTouchWrapper } from './styles';

const SolutionsPage = () => {
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <Wrapper>
        <SolutionsHeader />
      </Wrapper>
      <Wrapper>
        <PostThumbnailList />
      </Wrapper>
      <Wrapper>
        <GetInTouchWrapper>
          <span>
            <FormattedMessage id="solution_get_in_touch" />
          </span>
          <span>
            <a
              href="mailto:jpoumey@surfrider.eu?subject=Plastic origins"
              target="_top"
            >
              email
            </a>
          </span>
        </GetInTouchWrapper>
      </Wrapper>
    </>
  );
};

SolutionsPage.propTypes = {};

export default React.memo(SolutionsPage);
