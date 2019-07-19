import styled from 'styled-components'
import { defaultSpace, defaultRadius, mobileLg } from '../../globalStyles'

export const RegisterContainer = styled.form`
  .user-title, .parent-title, .phones-title, .emails-title {
    margin-bottom: ${defaultSpace};
  }

  .user-details, .user-address, .parent-details, .drive-license-fields {
    grid-gap: ${defaultSpace};
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: ${mobileLg}) {
      grid-template-columns: 1fr;
      grid-auto-flow: row;
    }
  }

  .phones-list, .emails-list {
    grid-gap: ${defaultSpace};
    margin-bottom: ${defaultSpace};

    &-item {
      border: 1px solid #ccc;
      padding: ${defaultSpace};
      border-radius: ${defaultRadius};
      grid-template-columns: 1fr 100px;
      grid-gap: ${defaultSpace};
      background-color: #eee;
      align-items: center;

      &:nth-child(even) {
        background-color: #fff;
      }

      @media screen and (max-width: ${mobileLg}) {
        grid-template-columns: 1fr;
        grid-auto-flow: row;
      }
    }
  }

  .emails-form, .phones-form {
    grid-gap: ${defaultSpace};

    button {
      &:first-of-type {
        margin-right: ${defaultSpace};
      }
    }
  }
`

export const ParentField = styled.div`
  margin-bottom: ${defaultSpace};
`

export const DriverLicenseContainer = styled.div``

export const PhonesContainer = styled.div`
  margin-bottom: ${defaultSpace};

  .phones-form-fields {
    grid-gap: ${defaultSpace};
    grid-template-columns: 150px 1fr;
  }
`

export const EmailsContainer = styled.div`
  margin-bottom: ${defaultSpace};
`
