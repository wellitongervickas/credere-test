import React from 'react'
import PropTypes from 'prop-types'
import {
  Heading, Paragraph, SubHeading,
} from './styles'

const Typography = ({ tag, children }) => {
  switch (tag) {
    case 'heading':
      return <Heading>{children}</Heading>

    case 'sub-heading':
      return <SubHeading>{children}</SubHeading>

    default:
      return <Paragraph>{children}</Paragraph>
  }
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['heading', 'sub-heading', 'paragraph']),
}

Typography.defaultProps = {
  tag: 'paragraph',
}

Typography.Heading = Heading
Typography.SubHeading = SubHeading
Typography.Paragraph = Paragraph

export default Typography
