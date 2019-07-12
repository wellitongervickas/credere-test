import React from 'react'
import PropTypes from 'prop-types'
import {
  Heading, Paragraph, SubHeading, Span,
} from './styles'

const Typography = ({ tag, children }) => {
  switch (tag) {
    case 'heading':
      return <Heading>{children}</Heading>

    case 'sub-heading':
      return <SubHeading>{children}</SubHeading>

    case 'paragraph':
      return <Paragraph>{children}</Paragraph>

    default:
      return <Span>{children}</Span>
  }
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['heading', 'sub-heading', 'paragraph', 'span']),
}

Typography.defaultProps = {
  tag: 'span',
}

Typography.Span = Span
Typography.Heading = Heading
Typography.SubHeading = SubHeading
Typography.Paragraph = Paragraph

export default Typography
