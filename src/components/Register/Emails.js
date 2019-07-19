import React, {
  useState, useCallback, useContext, useEffect,
} from 'react'
import uuid from 'uuid/v1'
import Input from '../Form/Input'
import formContext from '../Form/context'
import Typography from '../Typography'
import Button from '../Form/Button'
import { EmailsContainer } from './styles'
import { getFieldValue } from '../Form/helpers'

const EmailsField = () => {
  const { fields, updateFields } = useContext(formContext)
  const emails = useCallback(getFieldValue(fields, 'emails'), [fields])
  const [field, setField] = useState('')
  const [showField, toggleField] = useState(false)

  useEffect(() => {
    updateFields({ key: 'emails', value: [], error: '' })
  }, [updateFields])

  const handleUpdateEmail = useCallback(() => {
    const item = { id: uuid(), address: field }
    updateFields({ key: 'emails', value: [...emails, item], error: '' })
    toggleField(false)
    setField('')
  }, [updateFields, toggleField, setField, emails, field])

  const handleRemoveEmail = useCallback((id) => {
    if (emails.length > 1) {
      const newEmailsList = emails.filter(item => item.id !== id)
      updateFields({ key: 'emails', value: newEmailsList, error: '' })
    }
  }, [updateFields, emails])

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
                  onClick={() => handleRemoveEmail(item.id)}
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
          </div>
        )}
        <div className="flex">
          {showField && (
            <Button
              theme="success"
              size="md"
              modifier="outline"
              onClick={handleUpdateEmail}
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
    </EmailsContainer>
  )
}

export default EmailsField
