import React from 'react'
import Data from './Data'

import { Datas } from './styles.js'

const KeyDatas = () => (
  <Datas>
    <Data label="km" value={3456} timing={5} />
    <Data label="contributor" value={870} timing={4} />
    <Data label="trashperKm" value={20} timing={3} />
  </Datas>
)

export default KeyDatas
