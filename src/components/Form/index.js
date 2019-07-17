import React from 'react'
import PropTypes from 'prop-types'
import { FormContextProvider } from './context'

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

export default Form
