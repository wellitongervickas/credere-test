import React, {
  useRef, useCallback, useState, useContext, useEffect,
} from 'react'
import PropTypes from 'prop-types'
import Typography from '../../Typography'
import validator from './validator'
import formContext from '../context'
import {
  InputContainer, InputLabel, InputField, InputError,
} from './styles'

const Input = ({
  validation, field, label,
  className, ...props
}) => {
  const ref = useRef(null)
  const [error, setError] = useState(null)
  const { updateFields } = useContext(formContext)

  useEffect(() => {
    if (!ref.current.checkValidity()) {
      const { validationMessage, value } = ref.current
      updateFields({ key: field, value, error: validationMessage })
    }
  }, [ref, field, updateFields])

  const handleChange = useCallback(() => {
    ref.current = validator(validation, ref.current)
    const { validationMessage, value } = ref.current
    setError(validationMessage)
    updateFields({ key: field, value, error: validationMessage })
  }, [validation, ref, field, updateFields])

  return (
    <InputContainer>
      {label && (
        <InputLabel htmlFor={field} className={className}>
          <Typography.Span>{label}</Typography.Span>
          {props.required ? ' *' : ''}
        </InputLabel>
      )}
      <InputField
        ref={ref}
        name={field}
        id={field}
        onChange={handleChange}
        {...props}
      />
      <InputError>
        <Typography.Span>{error}</Typography.Span>
      </InputError>
    </InputContainer>
  )
}

Input.propTypes = {
  required: PropTypes.bool,
  field: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  validation: PropTypes.func,
}

Input.defaultProps = {
  validation: () => true,
  required: false,
  label: null,
  className: null,
}

export default Input
