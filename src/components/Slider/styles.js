import styled from 'styled-components'
import { mobileLg, defaultSpace } from '../../globalStyles'

const sliderDesktopDimensions = {
  width: '800px',
  height: '400px',
}

const sliderMobileDimensions = {
  width: '100%',
  height: '400px',
}

export const SliderWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 3px 5px rgba(0,0,0,0.1);
  overflow: hidden;
  ${sliderDesktopDimensions}

  @media screen and (max-width: ${mobileLg}) {
    ${sliderMobileDimensions}
  }
`

export const SliderList = styled.div``

export const SliderItem = styled.div`
  top: 0;
  ${sliderDesktopDimensions}

  @media screen and (max-width: ${mobileLg}) {
    ${sliderMobileDimensions}
  }
`

export const SliderButton = styled.div`
  right: 10px;
  bottom: 10px;
`

export const DefaultTemplate = styled.div`
  grid-template-rows: repeat(2, 1fr);

  & > div {
    padding: 40px;

    @media screen and (max-width: ${mobileLg}) {
      padding: 5px;
    }
  }

  & > div:nth-child(1) {
    background-position: center center;

    h2 {
      margin-bottom: ${defaultSpace};
    }
  }
}
`
