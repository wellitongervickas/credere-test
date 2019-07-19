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

const PhonesField = () => {
  const { fields, updateFields } = useContext(formContext)
  const phones = useCallback(getFieldValue(fields, 'phones'), [fields])
  const [showField, toggleField] = useState(false)
  const [code, setCode] = useState('')
  const [number, setNumber] = useState('')

  useEffect(() => {
    updateFields({ key: 'phones', value: [], error: '' })
  }, [updateFields])

  const handleUpdatePhones = useCallback(() => {
    const item = { id: uuid(), code, number }
    updateFields({ key: 'phones', value: [...phones, item], error: '' })
    toggleField(false)
    setCode('')
    setNumber('')
  }, [updateFields, toggleField, code, number, phones])

  const handleRemovePhones = useCallback((id) => {
    if (phones.length > 1) {
      const newPhonesList = phones.filter(item => item.id !== id)
      updateFields({ key: 'phones', value: newPhonesList, error: '' })
    }
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
                <Button
                  size="md"
                  modifier="outline"
                  onClick={() => handleRemovePhones(item.id)}
                >
                  Remover
                </Button>
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
