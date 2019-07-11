import React from 'react'
import PropTypes from 'prop-types'

const Item = ({
  template,
  image,
  title,
  subTitle,
  description,
}) => {
  console.log(
    template,
    image,
    title,
    subTitle,
    description,
  )

  return <div>Item</div>
}

Item.propTypes = {
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
