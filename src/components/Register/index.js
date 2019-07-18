import React, { useRef, useContext, useState } from 'react'
import Typography from '../Typography'
import formContext from '../Form/context'
import Button from '../Form/Button'
import Input from '../Form/Input'
import FormComponent from '../Form'
import { maxToday } from '../Form/Input/helpers'
import { isUnderAge, showCity } from './helpers'
import * as validations from '../../utils/validations'
import ParentFields from './ParentFields'
import DriverLicense from './DriverLicense'
import EmailsField from './Emails'
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

  // States
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [driveLicense, setDriveLicense] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')

  return (
    <RegisterContainer ref={ref} onSubmit={e => onSubmit(e, fields)} noValidate>
      <div>
        <Typography.SubHeading>Cliente</Typography.SubHeading>
        <div className="border-sizing">
          <div className="grid user-details ">
            <Input
              validation={validations.requiredField}
              field="name"
              label="Nome"
              defaultValue={name}
              onChange={setName}
              required
            />
            <Input
              validation={validations.requiredField}
              field="birthday"
              label="Data de nascimento"
              type="date"
              max={maxToday()}
              defaultValue={birthday}
              onChange={setBirthday}
              required
            />
          </div>
          {!isUnderAge(birthday) && <DriverLicense onSetDriverLicense={setDriveLicense} />}
          <div className="grid user-address">
            <Input
              validation={validations.requiredField}
              field="state"
              label="Estado"
              defaultValue={state}
              onChange={setState}
              pattern="[A-Za-z]{2}"
              maxLength="2"
              required
            />
            {showCity(state, driveLicense) && (
              <Input
                validation={validations.requiredField}
                field="city"
                label="Cidade"
                defaultValue={city}
                onChange={setCity}
                pattern="^[A-Za-z]*"
                minLength="3"
                required
              />
            )}
          </div>
        </div>
      </div>
      <EmailsField />
      {isUnderAge(birthday) && <ParentFields />}
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
