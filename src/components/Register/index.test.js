import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Register from '.'
import * as helpers from './helpers'
import ParentFields from './ParentFields'
import DriverLicense from './DriverLicense'
import EmailsField from './Emails'
import PhonesField from './Phones'
import DetailsField from './Details'
import AddressField from './Address'

describe('Register Component', () => {
  it('should render register component', () => {
    const element = renderer.create(<Register />).toJSON()
    expect(element).toMatchSnapshot()
  })

  it('should render partially components of Register', () => {
    const tree = mount(
      <>
        <ParentFields />
        <DriverLicense />
        <EmailsField />
        <PhonesField />
        <DetailsField />
        <AddressField />
      </>,
    )

    expect(tree).toMatchSnapshot()
  })
})

describe('Register Helpers', () => {
  it('should function isUnderAge to be defined', () => {
    expect(helpers.isUnderAge()).toBeDefined()
  })

  it('should user is under age', () => {
    const userDate = '12/12/2002'
    expect(helpers.isUnderAge(userDate)).toBeTruthy()
  })

  it('should user is of age', () => {
    const userDate = '12/12/1999'
    expect(helpers.isUnderAge(userDate)).toBeFalsy()
  })

  it('should user is under age because dont have props', () => {
    expect(helpers.isUnderAge()).toBeTruthy()
  })

  it('should function showCity to be defined', () => {
    expect(helpers.showCity()).toBeDefined()
  })

  it('should dont show city field because dont have props', () => {
    const isToShowCity = helpers.showCity()
    expect(isToShowCity).toBeFalsy()
  })

  it('should dont show city field because dont have drive license prop', () => {
    const isToShowCity = helpers.showCity('RN')
    expect(isToShowCity).toBeFalsy()
  })

  it('should dont show city field because dont have state prop', () => {
    const isToShowCity = helpers.showCity('', '6543312')
    expect(isToShowCity).toBeFalsy()
  })

  it('should dont show city field because dont have drive license initial value 6', () => {
    const isToShowCity = helpers.showCity('RN', '123456')
    expect(isToShowCity).toBeFalsy()
  })

  it('should dont show city field because state field isnt RN', () => {
    const isToShowCity = helpers.showCity('PR', '654321')
    expect(isToShowCity).toBeFalsy()
  })

  it('should show city because field state is RN and initial value of drive license is 6', () => {
    const isToShowCity = helpers.showCity('RN', '654321')
    expect(isToShowCity).toBeTruthy()
  })
})
