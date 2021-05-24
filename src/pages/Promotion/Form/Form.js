import React from 'react'
import { useParams } from 'react-router-dom'
import UIContainer from 'components/UI/Container/Container'
import PromotinForm from 'components/Promotion/Form/Form'

const PageForm = () => {
  const { id } = useParams()

  return (
    <div>
      <UIContainer>
        <PromotinForm />
      </UIContainer>
    </div>
  )
}

export default PageForm
