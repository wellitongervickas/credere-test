import styled from 'styled-components'
import {
  defaultRadius, defaultSpace, mobileSm, desktopSm, mobileLg,
} from '../../../globalStyles'

export const InputContainer = styled.div`
  margin-bottom: ${defaultSpace};
`

export const InputLabel = styled.label`
  display: block;
`
export const InputField = styled.input`
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: ${defaultRadius};
  box-shadow: 0 3px 5px rgba(0,0,0,0.1);
  height: 40px;
  padding: 0 12px;
  color: #666;
  width: 95%;

  @media (min-width: ${mobileSm}) and (max-width: ${desktopSm}) {
    width: 94%;
  }

  @media screen and (max-width: ${mobileLg}) {
    width: 93%;
  }

  @media screen and (max-width: ${mobileSm}) {
    width: 90%;
  }
`
export const InputError = styled.div`
  display: block;
  color: #900;
  font-size: 0.8rem;
`
