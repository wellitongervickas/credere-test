import styled from 'styled-components'
import { defaultSpace, defaultRadius, mobileLg } from '../../globalStyles'

export const RegisterContainer = styled.form`
  .user-details, .user-address {
    grid-gap: ${defaultSpace};
    grid-template-columns: 1fr 1fr 0;

    @media screen and (max-width: ${mobileLg}) {
      grid-template-columns: 1fr;
      grid-auto-flow: row;
    }
  }
`

export const DriverLicenseContainer = styled.div`
  .drive-license-fields {
    grid-gap: ${defaultSpace};
    grid-template-columns: 1fr 1fr 0;

    @media screen and (max-width: ${mobileLg}) {
      grid-template-columns: 1fr;
      grid-auto-flow: row;
    }
  }
`

export const PhonesContainer = styled.div``

export const EmailsContainer = styled.div`
  margin-bottom: ${defaultSpace};

  .emails-title {
    margin-bottom: ${defaultSpace};
  }

  .emails-list {
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

  .emails-form {
    grid-gap: ${defaultSpace};
  }
`
