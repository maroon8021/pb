import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import { Global, css } from "@emotion/react"
import Head from "next/head"
import { reset } from "../utils/styles"
import { useApolloClient } from "../hooks/useApolloClient"
import { useRouter } from "next/router"

const font = css`
  html,
  body {
    font-family: Ubuntu, "Noto Sans JP,Noto Sans Japanese,Noto Sans,sans-serif";
    background-color: #fafafa;
  }
`

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()
  return (
    <ApolloProvider client={useApolloClient(router)}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global
        styles={css`
          ${reset}
          ${font}
        `}
      />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
