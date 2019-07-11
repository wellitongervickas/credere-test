import styled from 'styled-components'

const sliderDimensions = {
  width: '800px',
  height: '400px',
}

export const SliderWrapper = styled.div`
  ${sliderDimensions}
  position: relative;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 3px 5px rgba(0,0,0,0.1);
  overflow: hidden;
`

export const SliderList = styled.div``

export const SliderItem = styled.div`
  ${sliderDimensions}
`

export const SliderButton = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
`
