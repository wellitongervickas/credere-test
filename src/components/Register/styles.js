import styled from 'styled-components'
import { defaultSpace, defaultRadius } from '../../globalStyles'

export const RegisterContainer = styled.form`
  .user-details, .user-address {
    grid-gap: ${defaultSpace};
    grid-template-columns: 1fr 1fr 0;
  }
`

export const DriverLicenseContainer = styled.div`
  .drive-license-fields {
    grid-gap: ${defaultSpace};
    grid-template-columns: 1fr 1fr 0;
  }
`

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

      &:nth-child(even) {
        background-color: #fff;
      }
    }
  }

  .emails-form {
    grid-gap: ${defaultSpace};
  }
`
