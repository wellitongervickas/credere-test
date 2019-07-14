import styled from 'styled-components'

const isEmphasys = props => (props.emphasys ? 'font-weight: 800' : null)

export const Heading = styled.h2`
  ${props => isEmphasys(props)};
  font-size: 32px;
  text-transform: uppercase;
  line-height: 42px;
`

export const SubHeading = styled.h3`
  ${props => isEmphasys(props)};
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
`

export const Paragraph = styled.p`
  ${props => isEmphasys(props)};
  font-size: 18px;
`

export const Span = styled.span``
