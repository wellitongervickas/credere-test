import React from 'react'
import PropTypes from 'prop-types'
import Image from '../commons/Image'
import Title from '../commons/Title'
import SubTitle from '../commons/SubTitle'
import Description from '../commons/Description'
import {
  DefaultTemplate, ThirdTemplate, FirstTemplate, FirstTemplateHeading,
} from './styles'

const First = ({
  // eslint-disable-next-line react/prop-types
  image, title, subTitle, description,
}) => (
  <FirstTemplate className="full-content grid">
    <Image className="flex-algin-end full-content" src={image} />
    <div>
      <FirstTemplateHeading>
        <Title text={title} color="#333333" />
        <SubTitle text={subTitle} color="#999999" />
      </FirstTemplateHeading>
      <Description text={description} color="#333333" />
    </div>
  </FirstTemplate>
)

const Second = ({
  // eslint-disable-next-line react/prop-types
  image, title, subTitle,
}) => (
  <div className="full-content">
    <Image className="flex-algin-end full-content" src={image}>
      <Title text={title} />
      <SubTitle text={subTitle} />
    </Image>
  </div>
)


const Third = ({
  // eslint-disable-next-line react/prop-types
  image, title, subTitle,
}) => (
  <ThirdTemplate className="full-content">
    <Image className="flex-column-center full-content" src={image}>
      <Title text={title} />
      <SubTitle text={subTitle} />
    </Image>
  </ThirdTemplate>
)

const Default = ({
  // eslint-disable-next-line react/prop-types
  image, title, subTitle, description,
}) => (
  <DefaultTemplate className="grid full-content">
    <Image className="flex-column-center" src={image}>
      <Title text={title} />
      <SubTitle text={subTitle} />
    </Image>
    <Description text={description} color="#333333" />
  </DefaultTemplate>
)

const Template = ({ ...props }) => {
  switch (props.template) {
    case 'default':
      return <Default {...props} />

    case 'template_3':
      return <Third {...props} />

    case 'template_2':
      return <Second {...props} />

    case 'template_1':
      return <First {...props} />

    default:
      return <Default {...props} />
  }
}

Template.propTypes = {
  template: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  description: PropTypes.string,
}

Template.defaultProps = {
  subTitle: null,
  description: null,
}

export default Template
