import styled from 'styled-components'

const sliderDimensions = {
  width: '800px',
  height: '400px',
}

export const SliderWrapper = styled.div`
  ${sliderDimensions}
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 3px 5px rgba(0,0,0,0.1);
  overflow: hidden;
`

export const SliderList = styled.div``

export const SliderItem = styled.div`
  top: 0;
  ${sliderDimensions}
`

export const SliderButton = styled.div`
  right: 10px;
  bottom: 10px;
`

export const DefaultTemplate = styled.div`
  grid-template-rows: repeat(2, 1fr);

  & > div {
    padding: 40px;
  }

  & > div:nth-child(1) {
    background-position: center center;

    h2 {
      margin-bottom: 16px;
    }
  }
}
`
