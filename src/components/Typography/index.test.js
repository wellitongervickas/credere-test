import React from 'react'
import renderer from 'react-test-renderer'
import Typography from '.'

describe('Typography Component', () => {
  it('should render compound typography components', () => {
    const tree = renderer.create(
      <>
        <Typography.Span>Span</Typography.Span>
        <Typography.Paragraph>SubHeading</Typography.Paragraph>
        <Typography.SubHeading>SubHeading</Typography.SubHeading>
        <Typography.Heading>Heading</Typography.Heading>
      </>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Typography Span with props', () => {
    const props = {
      text: 'Test Span',
      color: '#333',
      type: 'span',
    }
    const element = renderer.create(
      <Typography color={props.color} tag="span" emphasys>{props.text}</Typography>,
    ).toJSON()

    expect(element).toMatchObject({
      type: props.type,
      children: [props.text],
      props: {
        style: {
          color: props.color,
        },
      },
    })

    expect(element).toMatchSnapshot()
  })

  it('should render Typography Heading with props', () => {
    const props = {
      text: 'Test Heading',
      color: '#333',
      type: 'h2',
    }

    const element = renderer.create(
      <Typography color={props.color} tag="heading" emphasys>{props.text}</Typography>,
    ).toJSON()

    expect(element).toMatchObject({
      type: props.type,
      children: [props.text],
      props: {
        style: {
          color: props.color,
        },
      },
    })

    expect(element).toMatchSnapshot()
  })

  it('should render Typography sub-heading with props', () => {
    const props = {
      text: 'Test Sub Heading',
      color: '#ccc',
      type: 'h3',
    }

    const element = renderer.create(
      <Typography color={props.color} tag="sub-heading" emphasys>{props.text}</Typography>,
    ).toJSON()

    expect(element).toMatchObject({
      type: props.type,
      children: [props.text],
      props: {
        style: {
          color: props.color,
        },
      },
    })

    expect(element).toMatchSnapshot()
  })

  it('should render Typography paragraph with props', () => {
    const props = {
      text: 'Test Paragraph',
      color: '#ccc',
      type: 'p',
    }

    const element = renderer.create(
      <Typography color={props.color} tag="paragraph" emphasys>{props.text}</Typography>,
    ).toJSON()

    expect(element).toMatchObject({
      type: props.type,
      children: [props.text],
      props: {
        style: {
          color: props.color,
        },
      },
    })

    expect(element).toMatchSnapshot()
  })
})
