import React from 'react'
import * as validations from '../../utils/validations'
import Input from '../Form/Input'
import Typography from '../Typography'
import { ParentField } from './styles'

const ParentFields = () => (
  <ParentField>
    <Typography.SubHeading className="parent-title">Responsável</Typography.SubHeading>
    <div className="grid parent-details">
      <Input
        validation={validations.requiredField}
        field="parent-name"
        label="Nome"
        required
      />
      <div className="grid phones-form-fields">
        <Input
          validation={validations.requiredField}
          field="parent-phone-code"
          label="DDD"
          placeholder="DDD"
          maxLength="2"
          minLength="2"
          pattern="[0-9]*"
          required
        />
        <Input
          validation={validations.requiredField}
          field="parent-phone-number"
          label="Telefone"
          pattern="[0-9]*"
          maxLength="9"
          minLength="8"
          required
        />
      </div>
    </div>
  </ParentField>
)

export default ParentFields
