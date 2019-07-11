import React from 'react'
import PropTypes from 'prop-types'
import {
  typographyElement, Heading, Paragraph, SubHeading,
} from './styles'

const Typography = ({ tag, children }) => {
  const Element = typographyElement(tag)

  return <Element>{children}</Element>
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['heading', 'sub-heading', 'paragraph']).isRequired,
}

Typography.Heading = Heading
Typography.SubHeading = SubHeading
Typography.Paragraph = Paragraph

export default Typography
