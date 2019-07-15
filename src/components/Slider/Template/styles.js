import styled from 'styled-components'
import { mobileSm } from '../../../globalStyles'

export const DefaultTemplate = styled.div`
  grid-template-rows: repeat(2, 1fr);

  @media screen and (max-width: ${mobileSm}) {
    grid-auto-flow: row;
    grid-template-rows: inherit;
  }

  & > div:nth-child(1) {
    background-position: center center;

    h2 {
      margin-bottom: 16px;
    }

    @media screen and (max-width: ${mobileSm}) {
      text-align: center;
    }
  }

  & > div:nth-child(2) {
    @media screen and (max-width: ${mobileSm}) {
      justify-content: start;
    }
  }
}
`
export const ThirdTemplate = styled.div`
  text-align: right;
`

export const FirstTemplate = styled.div`
  grid-template-columns: 1fr 2fr;

  & > div:nth-child(1) {
    background-position: center;
  }
`

export const FirstTemplateHeading = styled.div`
  padding: 40px 40px 0 40px;

  @media screen and (max-width: ${mobileSm}) {
    padding: 10px 10px 0 10px;
  }
`
