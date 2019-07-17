import React, { useRef, useContext } from 'react'
import Typography from '../Typography'
import formContext, { FormContextProvider } from './context'
import Button from '../Form/Button'
import Input from './Input'
import * as validations from './validations'

const onSubmit = (e, fields = []) => {
  e.preventDefault()
  if (e.target.checkValidity()) {
    // eslint-disable-next-line no-console
    console.log('submit with:', fields)
  }
}

const Form = () => {
  const ref = useRef(null)
  const { fields } = useContext(formContext)
  return (
    <form ref={ref} onSubmit={e => onSubmit(e, fields)} noValidate>
      <div>
        <Typography.SubHeading>Cliente</Typography.SubHeading>
        <div>
          <Input validation={validations.requiredFiled} field="name" label="Nome" required />
        </div>
      </div>
      <Button type="submit">Register</Button>
    </form>
  )
}

const Register = () => (
  <FormContextProvider>
    <Form />
  </FormContextProvider>
)

export default Register
