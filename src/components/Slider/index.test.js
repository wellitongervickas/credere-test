import React from 'react'
import renderer from 'react-test-renderer'
import Slider from '.'
import ButtonAction from './Action'
import Description from './commons/Description'
import Image from './commons/Image'
import SubTitle from './commons/SubTitle'
import Title from './commons/Title'
import Template from './Template'

const slide = {
  image: 'https://img.ibxk.com.br/2019/07/10/10091423089001.jpg',
  title: 'Lorem ipsum dolor',
  subTitle: 'Sed non dui sed purus hendrerit aliquet a nec magna. ',
  description: 'Aliquam facilisis tempus neque, ac accumsan elit bibendum non. Duis molestie libero porta tortor placerat, vitae cursus diam placerat. Fusce feugiat libero erat, suscipit venenatis purus eleifend non',
}

describe('Slider Component Snapshots', () => {
  it('should render slider component', () => {
    const tree = renderer.create(
      <>
        <Slider>
          <Slider.Item template="default" index={1} {...slide} />
          <Slider.Item template="template_1" index={2} {...slide} />
          <Slider.Item template="template_2" index={3} {...slide} />
          <Slider.Item template="template_3" index={4} {...slide} />
        </Slider>
      </>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render slider component without childrens', () => {
    const element = renderer.create(<Slider />).toJSON()
    expect(element).toMatchSnapshot()
  })

  it('should render slider item', () => {
    const element = renderer.create(<Slider.Item template="default" index={1} {...slide} />).toJSON()
    expect(element).toMatchSnapshot()
  })

  it('should render button action', () => {
    const element = renderer.create(<ButtonAction />).toJSON()
    expect(element).toMatchSnapshot()
  })

  it('should render common description', () => {
    const tree = renderer.create(
      <>
        <Description />
        <Description text={slide.description} color="#333" />
      </>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render common title', () => {
    const element = renderer.create(<Title text={slide.title} color="#333" />).toJSON()
    expect(element).toMatchSnapshot()
  })

  it('should render common sub title', () => {
    const element = renderer.create(
      <>
        <SubTitle />
        <SubTitle text={slide.title} color="#333" />
      </>,
    ).toJSON()
    expect(element).toMatchSnapshot()
  })

  it('should render common image', () => {
    const tree = renderer.create(
      <>
        <Image src={slide.image} />
        <Image src={slide.image}>Children</Image>
      </>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render template list options', () => {
    const tree = renderer.create(
      <>
        <Template {...slide} />
        <Template template="default" {...slide} />
        <Template template="template_1" {...slide} />
        <Template template="template_2" {...slide} />
        <Template template="template_3" {...slide} />
      </>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
