import React, { useRef } from 'react'
import Typography from '../Typography'
import { FormContextProvider } from './context'
import Button from '../Form/Button'
import Input from './Input'
import * as validations from './validations'

const onSubmit = (e) => {
  e.preventDefault()
  if (e.target.checkValidity()) {
    // eslint-disable-next-line no-console
    console.log('submit with')
  }
}

const Form = () => {
  const ref = useRef(null)

  return (
    <form ref={ref} onSubmit={onSubmit} noValidate>
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
