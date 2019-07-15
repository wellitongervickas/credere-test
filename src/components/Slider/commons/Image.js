import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { ImageShadow, ImageContent } from './styles'

const Image = ({ src, children, className }) => (
  <div className={classnames(className, 'relative')} style={{ backgroundImage: `url(${src})` }}>
    <ImageShadow className="full-content absolute" />
    {children && (
      <ImageContent className="relative">
        {children}
      </ImageContent>
    )}
  </div>
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
}

Image.defaultProps = {
  children: null,
  className: null,
}

export default Image
