import { useMutation } from "@apollo/client"
import { useState, ChangeEvent, useCallback, FormEvent } from "react"
import { Login as Component } from "../components/login"
import { GQLMutation } from "pb-schema"
import { LOGIN } from "../graphql/mutations"
import { useRouter } from "next/router"

export const Login = () => {
  const router = useRouter()

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const [mutate, { loading, error }] = useMutation<GQLMutation>(LOGIN)

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()

      const { data, errors } = await mutate({
        variables: {
          input: {
            email,
            password,
          },
        },
      })

      const domain = data?.login.organization.domain

      console.log("errors", errors)

      if (!errors && domain) {
        router.push(`/${domain}`)
      }
    },
    [email, password]
  )

  const loginProps = {
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    loading,
    hasError: !!error,
  }

  return <Component {...loginProps} />
}
