import React, { useState, useCallback } from 'react'
import Typography from '../Typography'
import Button from '../Form/Button'
import Input from '../Form/Input'
import { PhonesContainer } from './styles'

const PhonesField = () => {
  const [phones, setPhones] = useState([])
  const [showField, toggleField] = useState(false)
  const [code, setCode] = useState('')
  const [number, setNumber] = useState('')

  const handleUpdatePhones = useCallback(() => {
    if (code.length && number.length) {
      setPhones(list => [...list, { id: Date.now(), code, number }])
      toggleField(false)
      setCode('')
      setNumber('')
    }
  }, [setPhones, toggleField, setCode, setNumber, code, number])

  const handleRemovePhones = useCallback((id) => {
    toggleField(false)
    setPhones(list => (list.length > 1 ? list.filter(item => item.id !== id) : list))
  }, [setPhones, toggleField])

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
