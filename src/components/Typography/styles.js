import styled from 'styled-components'

export const Heading = styled.h2``

export const SubHeading = styled.h3``

export const Paragraph = styled.p``

export const typographyElement = (tag) => {
  if (tag === 'heading') {
    return Heading
  }

  if (tag === 'sub-heading') {
    return SubHeading
  }

  return Paragraph
}
