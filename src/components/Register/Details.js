import React from 'react'
import Input from '../Form/Input'
import * as validations from '../../utils/validations'
import { maxToday } from '../Form/Input/helpers'

const DetailsField = () => (
  <div className="grid user-details ">
    <Input
      validation={validations.requiredField}
      field="name"
      label="Nome"
      required
    />
    <Input
      validation={validations.requiredField}
      field="birthday"
      label="Data de nascimento"
      type="date"
      max={maxToday()}
      required
    />
  </div>

)

export default DetailsField
