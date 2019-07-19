import React, {
  createContext, useState, useCallback,
} from 'react'
import PropTypes from 'prop-types'
import { findItemFromKey } from '../../utils/array'

const FormContext = createContext({
  fields: [],
  updateFields: () => {},
})

const FormContextProvider = ({ children }) => {
  const [fields, setFields] = useState([])

  const updateFields = useCallback((item) => {
    setFields((list) => {
      const exist = findItemFromKey(list, 'key', item.key)

      if (!exist) {
        return [...list, item]
      }

      return list.map((el) => {
        if (el.key === item.key) {
          return {
            ...el,
            value: item.value,
            error: item.error,
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
