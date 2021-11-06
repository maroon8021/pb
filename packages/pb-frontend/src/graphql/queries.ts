import { gql } from "@apollo/client"

export const OTHER_USERS_IN_ORGANIZATION = gql`
  query otherUsersInOrganization {
    otherUsersInOrganization {
      id
      displayName
      userName
    }
  }
`
