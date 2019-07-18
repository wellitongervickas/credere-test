import React, { useState, useCallback } from 'react'
import Input from '../Form/Input'
import Typography from '../Typography'
import Button from '../Form/Button'
import { EmailsContainer } from './styles'

const EmailsField = () => {
  const [emails, setEmails] = useState([{ id: 1, address: 'well@well.com' }])
  const [field, setField] = useState('')
  const [showField, toggleField] = useState(false)

  const handleUpdateEmails = useCallback(() => {
    setEmails(list => [...list, { id: Date.now(), address: field }])
    setField('')
    toggleField(false)
  }, [toggleField, setField, setEmails, field])

  const handleRemoveEmails = useCallback((id) => {
    toggleField(false)
    setEmails((list) => {
      if (list.length > 1) {
        return list.filter(item => item.id !== id)
      }

      return list
    })
  }, [setEmails, toggleField])

  return (
    <EmailsContainer>
      <Typography.SubHeading className="emails-title">E-mails</Typography.SubHeading>
      <div className="emails-list">
        {emails.map(item => (
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
        ))}
      </div>
      <div className="grid emails-form">
        {showField && (
          <div className="grid emails-list">
            <Input
              field="new-email"
              value={field}
              onChange={setField}
              type="email"
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
          theme="success"
          size="md"
          modifier="outline"
          onClick={() => toggleField(!showField)}
        >
          Adicionar mais
        </Button>
      </div>
    </EmailsContainer>
  )
}

export default EmailsField
