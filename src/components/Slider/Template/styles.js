import styled from 'styled-components'

export const DefaultTemplate = styled.div`
  grid-template-rows: repeat(2, 1fr);

  & > div:nth-child(1) {
    background-position: center center;

    h2 {
      margin-bottom: 16px;
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
`
