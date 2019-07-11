import React from 'react'
import PropTypes from 'prop-types'
import { SliderItem } from './styles'

const Item = ({
  index,
  template,
  image,
  title,
  subTitle,
  description,
}) => (
  <SliderItem data-index={index} data-template={template}>
    <div>{image}</div>
    <div>{title}</div>
    <div>{subTitle}</div>
    <div>{description}</div>
  </SliderItem>
)

Item.propTypes = {
  index: PropTypes.any.isRequired,
  template: PropTypes.oneOf(['default', 'template_2', 'template_3', 'template_4']),
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  description: PropTypes.string.isRequired,
}

Item.defaultProps = {
  template: 'default',
  subTitle: null,
}

export default Item
