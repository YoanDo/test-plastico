import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Data from '../Data'

import { KeysDataWrapper } from './styles'

const KeyDatas = () => {
  const [stats, setStats] = useState([])
  const getDatas = () => {
    axios
      .get('https://plasticostorageprod.blob.core.windows.net/public/data_home_page.json')
      .then(res => setStats(res.data))
      // todo remove
      .catch(er => console.log('api error:', er))
  }

  useEffect(() => {
    getDatas()
  })

  if (!stats) return null

  const { contributors, coveredKm, trashPerKm } = stats

  return (
    <KeysDataWrapper>
      {/* {stats[0] && <Data label="contributors" value={stats[0]} timing={4} />}
      {stats[1] && <Data label="km" value={stats[1]} timing={5} />}
      {stats[2] && <Data label="trash_per_km" value={stats[2]} timing={3} />} */}
      {/* change back when the api is cleaned */}
      {contributors && <Data label="contributors" value={contributors} timing={4} />}
      {coveredKm && <Data label="km" value={coveredKm} timing={5} />}
      {trashPerKm && <Data label="trash_per_km" value={trashPerKm} timing={3} />}
    </KeysDataWrapper>
  )
}

export default KeyDatas
