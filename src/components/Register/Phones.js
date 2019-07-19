import React, { useState } from 'react'
import Typography from '../Typography'
import { PhonesContainer } from './styles'

const PhonesField = () => {
  const [phones] = useState([])

  return (
    <PhonesContainer>
      <Typography.SubHeading className="phones-title">Telefones</Typography.SubHeading>
      <div className="grid phones-list">
        {phones.length ? phones.map(item => (
          <div key={item.id}>
            {item.number}
          </div>
        )) : (
          <Typography.Span>Não há telefones cadastrados!</Typography.Span>
        )}
      </div>
    </PhonesContainer>
  )
}

export default PhonesField
