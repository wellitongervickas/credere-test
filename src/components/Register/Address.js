import React, { useContext, useMemo } from 'react'
import Input from '../Form/Input'
import formContext from '../Form/context'
import * as validations from '../../utils/validations'
import { showCity } from './helpers'
import { getFieldValue } from '../Form/Input/helpers'

const AddressField = () => {
  const { fields } = useContext(formContext)
  const { state, driveLicense } = useMemo(() => ({
    state: getFieldValue(fields, 'state'),
    driveLicense: getFieldValue(fields, 'driver_license'),
  }), [fields])

  return (
    <div className="grid user-address">
      <Input
        validation={validations.requiredField}
        field="state"
        label="Estado"
        pattern="[A-Za-z]{2}"
        maxLength="2"
        required
      />
      {showCity(state, driveLicense) && (
        <Input
          validation={validations.requiredField}
          field="city"
          label="Cidade"
          pattern="^[A-Za-z]*"
          minLength="3"
          required
        />
      )}
    </div>
  )
}

export default AddressField
