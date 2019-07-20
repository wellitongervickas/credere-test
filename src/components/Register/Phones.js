/* eslint-disable no-param-reassign */

import React, {
  useState, useCallback, useContext, useEffect,
} from 'react'
import uuid from 'uuid/v1'
import Typography from '../Typography'
import formContext from '../Form/context'
import Button from '../Form/Button'
import Input from '../Form/Input'
import { PhonesContainer } from './styles'
import { getFieldValue } from '../Form/helpers'
import { requiredField } from '../../utils/validations'
import { removeFromList } from '../../utils/array'
import { updateMainPhone } from './helpers'

const PhonesField = () => {
  const { fields, updateFields, removeField } = useContext(formContext)
  const phones = useCallback(getFieldValue(fields, 'phones'), [fields])
  const [showField, toggleField] = useState(false)
  const [code, setCode] = useState('')
  const [number, setNumber] = useState('')

  useEffect(() => {
    updateFields({ key: 'phones', value: [], error: '' })
  }, [updateFields])

  const handleUpdatePhones = useCallback(() => {
    if (code.length && number.length) {
      const item = {
        id: uuid(), main: false, code, number,
      }

      updateFields({ key: 'phones', value: [...phones, item], error: '' })

      toggleField(false)
      setCode('')
      setNumber('')

      removeField('new-phone-code')
      removeField('new-phone-number')
      removeField(`phone-main-${item.id}`)
    }
  }, [updateFields, toggleField, code, number, phones, removeField])

  const handleRemovePhones = useCallback((id) => {
    if (phones.length > 1) {
      updateFields({ key: 'phones', value: removeFromList(phones, 'id', id), error: '' })
    }
  }, [updateFields, phones])

  const handleUpdatMainPhone = useCallback((id) => {
    updateFields({ key: 'phones', value: updateMainPhone(phones, id), error: '' })
  }, [updateFields, phones])

  return (
    <PhonesContainer>
      <Typography.SubHeading className="phones-title">Telefones</Typography.SubHeading>
      <div className="grid phones-list">
        {phones.length ? phones.map(item => (
          <div className="grid phones-list-item" key={item.id}>
            <div>{`(${item.code}) ${item.number}`}</div>
            {phones.length > 1 && (
              <div>
                <div>
                  <Button
                    size="md"
                    modifier="outline"
                    onClick={() => handleRemovePhones(item.id)}
                  >
                    Remover
                  </Button>
                </div>
                <div>
                  <label className="flex-content-evenly" htmlFor={`phone-main-${item.id}`}>
                    <Input
                      field={`phone-main-${item.id}`}
                      name="phone-main"
                      type="radio"
                      checked={item.main}
                      onChange={() => handleUpdatMainPhone(item.id)}
                      value={item.id}
                    />
                    Principal
                  </label>
                </div>
              </div>
            )}
          </div>
        )) : (
          <Typography.Span>Não há telefones cadastrados!</Typography.Span>
        )}
      </div>
      <div className="grid phones-form">
        {showField && (
          <div className="grid phones-form-fields">
            <Input
              label="DDD"
              field="new-phone-code"
              value={code}
              onChange={setCode}
              placeholder="DDD"
              maxLength="2"
              minLength="2"
              pattern="[0-9]*"
              validation={requiredField}
              required
            />
            <Input
              label="Numero"
              field="new-phone-number"
              value={number}
              onChange={setNumber}
              placeholder="Insira o número"
              pattern="[0-9]*"
              maxLength="9"
              minLength="8"
              validation={requiredField}
              required
            />
          </div>
        )}
        <div className="flex">
          {showField && (
            <Button
              theme="success"
              size="md"
              modifier="outline"
              onClick={handleUpdatePhones}
            >
              Cadastrar
            </Button>
          )}
          <Button
            theme={!showField ? 'success' : 'default'}
            size="md"
            modifier="outline"
            onClick={() => toggleField(!showField)}
          >
            {!showField ? 'Adicionar mais' : 'Cancelar' }
          </Button>
        </div>
      </div>
    </PhonesContainer>
  )
}

export default PhonesField
