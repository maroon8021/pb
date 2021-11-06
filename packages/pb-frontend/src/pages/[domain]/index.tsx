import Head from "next/head"
import { useRouter } from "next/router"
import { Header } from "../../containers/header"
import { BaseContainer } from "../../components/base-container"
import { SendCard } from "../../containers/send-card"

const Index = () => {
  const router = useRouter()
  const domain = router.query["domain"] as string

  return (
    <>
      <Head>
        <title>PB: Login</title>
      </Head>
      <Header />
      <BaseContainer>
        <SendCard />
      </BaseContainer>
    </>
  )
}

export default Index
