import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { SliderItem } from './styles'
import SliderContext from './context'
import Template from './Template'

const Item = ({ ...props }) => {
  const { activatedSlider } = useContext(SliderContext)

  return (
    <SliderItem
      data-index={props.index}
      data-template={props.template}
      className={classnames(
        activatedSlider === props.index ? 'visible' : 'hidden',
        'transition-all',
        'absolute',
      )}
    >
      <Template {...props} />
    </SliderItem>
  )
}

Item.propTypes = {
  index: PropTypes.any.isRequired,
  template: PropTypes.oneOf(['default', 'template_1', 'template_2', 'template_3']),
}

Item.defaultProps = {
  template: 'default',
}

export default Item
