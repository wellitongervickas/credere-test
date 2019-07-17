import React, {
  createContext, useState, useCallback,
} from 'react'
import PropTypes from 'prop-types'

const FormContext = createContext({
  fields: [],
  errors: [],
  updateFields: () => {},
  updateErrors: () => {},
  removeErrors: () => {},
})

const FormContextProvider = ({ children }) => {
  const [errors, setErrors] = useState([])
  const [fields, setFields] = useState([])

  const removeErrors = useCallback((field) => {
    setErrors(errors.filter(item => item.key !== field))
  }, [setErrors, errors])

  const updateErrors = useCallback((item) => {
    setErrors((errs) => {
      const exists = errs.find(error => error.key === item.key)
      if (!exists) {
        return [...errs, item]
      }

      return errs
    })
  }, [])

  const updateFields = useCallback((item) => {
    setFields((list) => {
      const exist = list.find(el => el.key === item.key)

      if (!exist) {
        return [...list, item]
      }

      return list.map((el) => {
        if (el.key === item.key) {
          return {
            ...el,
            value: item.value,
          }
        }

        return el
      })
    })
  }, [])

  return (
    <FormContext.Provider value={{
      fields,
      updateFields,
      errors,
      updateErrors,
      removeErrors,
    }}
    >
      {children}
    </FormContext.Provider>
  )
}

FormContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export {
  FormContextProvider,
}

export default FormContext
