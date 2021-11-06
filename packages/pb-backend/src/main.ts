import { NestFactory } from "@nestjs/core"
import { createConnection } from "typeorm"
import * as cookieParser from "cookie-parser"
import { AppModule } from "./app.module"
import { SessionInterceptor } from "./utils/interceptors/session"

async function bootstrap() {
  await createConnection()

  const app = await NestFactory.create(AppModule)

  console.log("cookieParser()", cookieParser())
  app.use(cookieParser())

  app.useGlobalInterceptors(new SessionInterceptor())

  await app.listen(50000)
}
bootstrap()
