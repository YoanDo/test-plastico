import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Data from './components/Data';
import { Wrapper } from '../../hoc/layout/styles';

import { KeysDataWrapper } from './styles';

const KeyDatas = () => {
  const [stats, setStats] = useState({});
  const getDatas = () => {
    axios
      .get(
        'https://plasticostorageprod.blob.core.windows.net/public/data_home_page.json',
        {
          headers: {
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: '0'
          }
        }
      )
      .then(({ data }) => {
        setStats(data);
      })
      // todo remove
      .catch((er) => console.log('api error:', er));
  };

  useEffect(() => {
    getDatas();
  }, []);

  if (!stats) return null;

  const { contributors, coveredKm, trashPerKm } = stats;

  return (
    <Wrapper>
      <KeysDataWrapper>
        {contributors && (
          <Data label="contributors" value={contributors} timing={4} />
        )}
        {coveredKm && <Data label="km" value={coveredKm} timing={5} />}
        {trashPerKm && (
          <Data label="trash_per_km" value={trashPerKm} timing={3} />
        )}
      </KeysDataWrapper>
    </Wrapper>
  );
};

export default KeyDatas;
