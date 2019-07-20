import React from 'react'
import PropTypes from 'prop-types'
import {
  Heading, Paragraph, SubHeading, Span,
} from './styles'

const Typography = ({
  tag, children, color,
  emphasys, ...rest
}) => {
  switch (tag) {
    case 'span':
      return (
        <Span style={{ color }} emphasys={emphasys} {...rest}>
          {children}
        </Span>
      )

    case 'heading':
      return (
        <Heading style={{ color }} emphasys={emphasys} {...rest}>
          {children}
        </Heading>
      )

    case 'sub-heading':
      return (
        <SubHeading style={{ color }} emphasys={emphasys} {...rest}>
          {children}
        </SubHeading>
      )

    case 'paragraph':
      return (
        <Paragraph style={{ color }} emphasys={emphasys} {...rest}>
          {children}
        </Paragraph>
      )

    default:
      return (
        <Span style={{ color }} emphasys={emphasys} {...rest}>
          {children}
        </Span>
      )
  }
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['heading', 'sub-heading', 'paragraph', 'span', '']),
  color: PropTypes.string,
  emphasys: PropTypes.bool,
}

Typography.defaultProps = {
  emphasys: false,
  tag: '',
  color: '#FFFFFF',
}

Typography.Span = Span
Typography.Heading = Heading
Typography.SubHeading = SubHeading
Typography.Paragraph = Paragraph

export default Typography
