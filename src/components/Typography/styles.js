import styled from 'styled-components'
import { setFontSizing, isEmphasys } from '../../utils/font'
import { mobileSm } from '../../globalStyles'

export const Heading = styled.h2`
  ${props => isEmphasys(props.emphasys)};
  text-transform: uppercase;
  ${setFontSizing(32)}

  @media screen and (max-width: ${mobileSm}) {
    ${setFontSizing(22)}
  }
`
export const SubHeading = styled.h3`
  ${props => isEmphasys(props.emphasys) || 'font-weight: 400'};
  ${setFontSizing(22)}

  @media screen and (max-width: ${mobileSm}) {
    ${setFontSizing(18)}
  }
`
export const Paragraph = styled.p`
  ${props => isEmphasys(props.emphasys)};
  ${setFontSizing(18)}

  @media screen and (max-width: ${mobileSm}) {
    ${setFontSizing(14)}
  }
`

export const Span = styled.span``
