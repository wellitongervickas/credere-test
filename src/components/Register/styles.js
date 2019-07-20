import styled from 'styled-components'
import {
  defaultSpace, defaultRadius, mobileLg, mobileSm,
} from '../../globalStyles'

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

  .phones-form-fields {
    grid-gap: ${defaultSpace};
    grid-template-columns: 150px 1fr;

    @media screen and (max-width: ${mobileSm}) {
      grid-template-columns: 50px 1fr;

      input {
        max-width: 80%;
      }
    }
  }
`

export const ParentField = styled.div`
  margin-bottom: ${defaultSpace};
`

export const PhonesContainer = styled.div`
  margin-bottom: ${defaultSpace};
`

export const EmailsContainer = styled.div`
  margin-bottom: ${defaultSpace};
`
