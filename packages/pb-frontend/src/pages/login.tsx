import Head from "next/head"
import { Header } from "../containers/header"
import { Login } from "../containers/login"

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>PB: Login</title>
      </Head>
      <Header />
      <Login />
    </>
  )
}

export default LoginPage
