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
      <Input
        validation={validations.requiredField}
        field="parent-phone"
        label="Telefone"
        required
      />
    </div>
  </ParentField>
)

export default ParentFields
