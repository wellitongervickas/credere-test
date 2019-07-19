import React from 'react'
import PropTypes from 'prop-types'
import { FormContextProvider } from './context'
import Button from './Button'
import Input from './Input'

const Form = ({ children }) => (
  <FormContextProvider>
    {children}
  </FormContextProvider>
)

Form.propTypes = {
  children: PropTypes.node,
}

Form.defaultProps = {
  children: null,
}

Form.Button = Button
Form.Input = Input

export default Form
