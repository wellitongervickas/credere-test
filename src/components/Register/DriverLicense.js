import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import * as validations from '../../utils/validations'
import Input from '../Form/Input'
import Typography from '../Typography'
import { maxToday } from '../Form/Input/helpers'
import { DriverLicenseContainer } from './styles'

const DriverLicense = ({ onSetDriverLicense }) => {
  const [driveLicense, setDriveLicense] = useState('')
  const [driveLicenseIssue, setDriveLicenseIssue] = useState('')

  const handleUpdateDriverLicense = useCallback((e) => {
    onSetDriverLicense(e)
    setDriveLicense(e)
  }, [setDriveLicense, onSetDriverLicense])

  return (
    <DriverLicenseContainer>
      <Typography.Span>Carteira de motorista</Typography.Span>
      <div className="grid drive-license-fields border-sizing">
        <Input
          validation={validations.requiredField}
          field="driver_license"
          defaultValue={driveLicense}
          onChange={handleUpdateDriverLicense}
          pattern="^[0-9]*"
          required
        />
        <Input
          validation={validations.requiredField}
          field="driver_license_issue"
          type="date"
          max={maxToday()}
          defaultValue={driveLicenseIssue}
          onChange={setDriveLicenseIssue}
          required
        />
      </div>
    </DriverLicenseContainer>
  )
}

DriverLicense.propTypes = {
  onSetDriverLicense: PropTypes.func.isRequired,
}

export default DriverLicense
