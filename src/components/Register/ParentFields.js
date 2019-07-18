import React, { useState } from 'react'
import * as validations from '../../utils/validations'
import Input from '../Form/Input'
import Typography from '../Typography'

const ParentFields = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <div>
      <Typography.SubHeading>Responsável</Typography.SubHeading>
      <div className="border-sizing">
        <Input
          validation={validations.requiredField}
          field="parent-name"
          label="Nome"
          defaultValue={name}
          onChange={setName}
          required
        />
        <Input
          validation={validations.requiredField}
          field="parent-phone"
          label="Telefone"
          defaultValue={phone}
          onChange={setPhone}
          required
        />
      </div>
    </div>
  )
}

export default ParentFields
