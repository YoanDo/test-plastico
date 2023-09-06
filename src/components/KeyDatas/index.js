import React from 'react';
import { array } from 'prop-types';
import Data from './components/Data';
import { Wrapper } from '../../hoc/layout/styles';

import { KeysDataWrapper } from './styles';

const KeyDatas = ({ stats }) => {
  if (!stats) return null;

  return (
    <Wrapper>
      <KeysDataWrapper>
        {stats.map((s, index) => {
          const { label, value } = s;
          return <Data label={label} value={value} timing={index + 2} />;
        })}
      </KeysDataWrapper>
    </Wrapper>
  );
};

KeyDatas.propTypes = {
  stats: array
};

export default KeyDatas;
