import React, {
  useRef, useCallback, useContext, useEffect, useMemo,
} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Typography from '../../Typography'
import { validator } from './helpers'
import { getFieldError } from '../helpers'
import formContext from '../context'
import {
  InputContainer, InputLabel, InputField, InputError,
} from './styles'

const Input = ({
  validation, field, label, className, onChange, ...props
}) => {
  const ref = useRef(null)
  const { fields, updateFields } = useContext(formContext)

  useEffect(() => {
    if (!ref.current.checkValidity()) {
      const { value } = ref.current

      updateFields({ key: field, value, error: '' })
    }
  }, [ref, field, updateFields])

  const handleChange = useCallback(() => {
    ref.current = validator(validation, ref.current)
    const { validationMessage, value } = ref.current

    updateFields({ key: field, value, error: validationMessage })
    onChange(value)
  }, [validation, ref, field, updateFields, onChange])

  const fieldError = useCallback(getFieldError(fields, field), [field, fields])

  const newProps = useMemo(() => ({
    ...props,
    name: props.name || field,
  }), [props, field])

  return (
    <InputContainer className={classnames(className, 'border-sizing')}>
      {label && (
        <InputLabel htmlFor={field}>
          <Typography.Span>{label}</Typography.Span>
          {props.required ? ' *' : ''}
        </InputLabel>
      )}
      <InputField
        isRadio={props.type === 'radio'}
        ref={ref}
        name={field}
        id={field}
        onChange={handleChange}
        {...newProps}
      />
      {fieldError && fieldError.length > 0 && (
        <InputError>
          <Typography.Span>{fieldError}</Typography.Span>
        </InputError>
      )}
    </InputContainer>
  )
}

Input.propTypes = {
  required: PropTypes.bool,
  field: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  validation: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.oneOf(['radio', 'text', 'number', 'date', 'email']),
}

Input.defaultProps = {
  onChange: () => {},
  validation: () => '',
  required: false,
  label: null,
  className: null,
  name: null,
  type: 'text',
}

export default Input
