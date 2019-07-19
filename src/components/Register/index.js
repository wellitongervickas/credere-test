import React, { useRef, useContext, useMemo } from 'react'
import Typography from '../Typography'
import formContext from '../Form/context'
import Button from '../Form/Button'
import FormComponent from '../Form'
import { isUnderAge } from './helpers'
import { getFieldValue } from '../Form/Input/helpers'
import ParentFields from './ParentFields'
import DriverLicense from './DriverLicense'
import EmailsField from './Emails'
import PhonesField from './Phones'
import DetailsField from './Details'
import AddressField from './Address'
import { RegisterContainer } from './styles'

const onSubmit = (e, fields = []) => {
  e.preventDefault()
  if (e.target.checkValidity()) {
    // eslint-disable-next-line no-console
    console.log('submit with:', fields)
    // eslint-disable-next-line no-alert
    alert('submited')
  }
}

const Form = () => {
  const ref = useRef(null)
  const { fields } = useContext(formContext)
  const birthday = useMemo(() => getFieldValue(fields, 'birthday'), [fields])

  return (
    <RegisterContainer ref={ref} onSubmit={e => onSubmit(e, fields)} noValidate>
      <div>
        <Typography.SubHeading>Cliente</Typography.SubHeading>
        <DetailsField />
        {!isUnderAge(birthday) && (<DriverLicense />)}
        <AddressField />
      </div>
      <PhonesField />
      <EmailsField />
      {isUnderAge(birthday) && (<ParentFields />)}
      <Button type="submit">Register</Button>
    </RegisterContainer>
  )
}

const Register = () => (
  <FormComponent>
    <Form />
  </FormComponent>
)

export default Register
