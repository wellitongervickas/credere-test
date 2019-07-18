import React, { useState, useCallback } from 'react'
import Input from '../Form/Input'
import Typography from '../Typography'
import Button from '../Form/Button'
import { EmailsContainer } from './styles'

const EmailsField = () => {
  const [emails, setEmails] = useState([])
  const [field, setField] = useState('')
  const [showField, toggleField] = useState(false)

  const handleUpdateEmails = useCallback(() => {
    if (field.length) {
      setEmails(list => [...list, { id: Date.now(), address: field }])
      toggleField(false)
      setField('')
    }
  }, [toggleField, setField, setEmails, field])

  const handleRemoveEmails = useCallback((id) => {
    toggleField(false)
    setEmails(list => (list.length > 1 ? list.filter(item => item.id !== id) : list))
  }, [setEmails, toggleField])

  return (
    <EmailsContainer>
      <Typography.SubHeading className="emails-title">E-mails</Typography.SubHeading>
      <div className="grid emails-list">
        {emails.length ? emails.map(item => (
          <div key={item.id} className="grid emails-list-item">
            <div>{item.address}</div>
            {emails.length > 1 && (
              <div>
                <Button
                  size="md"
                  modifier="outline"
                  onClick={() => handleRemoveEmails(item.id)}
                >
                  Remover
                </Button>
              </div>
            )}
          </div>
        )) : (
          <Typography.Span>Não há e-mails cadastrados!</Typography.Span>
        )}
      </div>
      <div className="grid emails-form">
        {showField && (
          <div className="grid">
            <Input
              field="new-email"
              value={field}
              onChange={setField}
              type="email"
              placeholder="Insira seu e-mail"
            />
            <Button
              theme="success"
              size="md"
              modifier="outline"
              onClick={handleUpdateEmails}
            >
              Cadastrar
            </Button>
          </div>
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
    </EmailsContainer>
  )
}

export default EmailsField
