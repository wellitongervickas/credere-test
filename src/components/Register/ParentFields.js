import React from 'react'
import * as validations from '../../utils/validations'
import Input from '../Form/Input'
import Typography from '../Typography'

const ParentFields = () => (
  <div>
    <Typography.SubHeading>Responsável</Typography.SubHeading>
    <div className="border-sizing">
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
  </div>
)

export default ParentFields
