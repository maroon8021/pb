import { useQuery } from "@apollo/client"
import { GQLQuery, GQLUserAccount } from "pb-schema"
import { useMemo } from "react"
import { SendCard as Compoenent } from "../components/send-card"
import { OTHER_USERS_IN_ORGANIZATION } from "../graphql/queries"

export const SendCard = () => {
  const { data } = useQuery<GQLQuery>(OTHER_USERS_IN_ORGANIZATION)
  const rawUserAccounts = data?.otherUsersInOrganization || []

  const suggestUsers = useMemo(() => {
    return rawUserAccounts.map(
      ({ id, displayName, userName }: GQLUserAccount) => ({
        id,
        displayName,
        userName,
      })
    )
  }, rawUserAccounts)

  const props = {
    suggestUsers,
  }

  return <Compoenent {...props} />
}
