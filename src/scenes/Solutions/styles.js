import styled from 'styled-components'

import schemaBackground_fr from '../../assets/images/polutionsSchemaFr.png'

export const Schema = styled.div`
  width: 100%;
  height: 100%;
  min-height: 75vh;
  background: url(${schemaBackground_fr});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media ${({ theme }) => theme.device.belowLaptop} {
    min-height: 34vh;
  }
`
