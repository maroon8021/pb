import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { onError } from "@apollo/client/link/error"
import { NextRouter, useRouter } from "next/router"
// import { cache } from "../cache"
import { BACKEND_URL, NODE_ENV } from "../utils/settings"

// const authLink = setContext((_, { headers }) => {
//   // Get the access token from local storage if it exists
//   // token自体はuseQueryで取得できるが、このauthLink内でできるのかあやしいのでこれで取得
//   const token = localStorage.getItem("token")

//   // Return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: `${token}`,
//     },
//   }
// })

export const useApolloClient = (router: NextRouter) => {
  const APOLLO_ERR_CODE = {
    UNAUTHENTICATED: "UNAUTHENTICATED",
  } as const

  const handleError = (errorCode: string) => {
    switch (errorCode) {
      case APOLLO_ERR_CODE.UNAUTHENTICATED:
        router.push("/login")
        return
    }
  }

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach((err) => {
        // errorLogger(
        //   `[GraphQL Error] ${err.extensions?.code}: ${err.message}`,
        //   "graphql"
        // );
        console.log(err)
        handleError(err?.extensions?.code)
      })
    }
    if (networkError) {
      console.log(networkError)
    }
  })

  const httpLink = createHttpLink({
    uri: `${BACKEND_URL}/graphql`,
    ...(NODE_ENV === "development" && {
      fetchOptions: { credentials: "include", mode: "cors" },
    }),
  })

  return new ApolloClient({
    link: ApolloLink.from([errorLink, httpLink]),
    cache: new InMemoryCache(),
  })
}
