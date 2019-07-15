import styled from 'styled-components'
import { mobileSm } from '../../../globalStyles'

export const ImageShadow = styled.div`
  background-color: rgba(0,0,0, 0.7);
  z-index: 0;
  left: 0;
}
`
export const ImageContent = styled.div`
  z-index: 4;
  padding: 40px;

  @media screen and (max-width: ${mobileSm}) {
    padding: 10px;
  }
`
export const DescriptionWrapper = styled.div`
  padding: 40px;

  @media screen and (max-width: ${mobileSm}) {
    padding: 10px;
  }
`
