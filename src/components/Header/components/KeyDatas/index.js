import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Data from './Data'

import { Datas } from './styles.js'

const KeyDatas = () => {
  const getDatas = () => {
    axios
      .get('https://plasticostorageprod.blob.core.windows.net/public/data_home_page.json')
      .then(res => console.log('api:', res))
      .catch(er => console.log('api:', er))
  }

  // useEffect(() => console.log(getDatas()))
  getDatas()

  return (
    <Datas>
      <Data label="contributor" value={870} timing={4} />
      <Data label="km" value={3456} timing={5} />
      <Data label="trash_per_km" value={20} timing={3} />
    </Datas>
  )
}

export default KeyDatas
