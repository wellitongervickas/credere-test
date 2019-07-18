import React from 'react'
import * as validations from '../../utils/validations'
import Input from '../Form/Input'
import Typography from '../Typography'
import { maxToday } from '../Form/Input/helpers'
import { DriverLicenseContainer } from './styles'

const DriverLicense = () => (
  <DriverLicenseContainer>
    <Typography.Span>Carteira de motorista</Typography.Span>
    <div className="grid drive-license-fields">
      <Input
        validation={validations.requiredField}
        field="driver_license"
        pattern="^[0-9]*"
        required
      />
      <Input
        validation={validations.requiredField}
        field="driver_license_issue"
        type="date"
        max={maxToday()}
        required
      />
    </div>
  </DriverLicenseContainer>
)


export default DriverLicense
