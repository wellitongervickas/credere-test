import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { SliderItem } from './styles'
import Typography from '../Typography'
import SliderContext from './context'

const Item = ({
  index, template, image, title,
  subTitle, description,
}) => {
  const { activatedSlider } = useContext(SliderContext)

  return (
    <SliderItem
      className={classnames(
        activatedSlider === index ? 'visible' : 'hidden',
        'transition-all',
      )}
      data-index={index}
      data-template={template}
    >
      <div>
        <img width="100" src={image} alt={title} />
      </div>
      <div>
        <Typography tag="heading">
          {title}
        </Typography>
      </div>
      <div>
        <Typography tag="sub-heading">
          {subTitle}
        </Typography>
      </div>
      <div>
        <Typography>
          {description}
        </Typography>
      </div>
    </SliderItem>
  )
}

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
