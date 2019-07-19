import React, { useState } from 'react'
import Typography from '../Typography'
import Button from '../Form/Button'
import { PhonesContainer } from './styles'

const PhonesField = () => {
  const [phones] = useState([])
  // const [field, setField] = useState('')
  const [showField, toggleField] = useState(false)

  return (
    <PhonesContainer>
      <Typography.SubHeading className="phones-title">Telefones</Typography.SubHeading>
      <div className="grid phones-list">
        {phones.length ? phones.map(item => (
          <div className="grid phones-list-item" key={item.id}>
            <div>{item.number}</div>
            {phones.length > 1 && (
              <div>
                <Button
                  size="md"
                  modifier="outline"
                  onClick={() => {}}
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
        <Button
          theme={!showField ? 'success' : 'default'}
          size="md"
          modifier="outline"
          onClick={() => toggleField(!showField)}
        >
          {!showField ? 'Adicionar mais' : 'Cancelar' }
        </Button>
      </div>
    </PhonesContainer>
  )
}

export default PhonesField
