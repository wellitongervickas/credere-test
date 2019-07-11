import styled from 'styled-components'

export const Heading = styled.h2``

export const SubHeading = styled.h3``

export const Paragraph = styled.p``

export const typographyElement = (tag) => {
  switch (tag) {
    case 'heading':
      return Heading

    case 'sub=heading':
      return SubHeading

    default:
      return Paragraph
  }
}
