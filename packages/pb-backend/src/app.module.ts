import { Module } from "@nestjs/common"
import { GraphQLModule } from "@nestjs/graphql"
import { join } from "path"
import { PeerBonusApplicationService } from "./application-service/peer-bonus"
import { SessionApplicationService } from "./application-service/session"
import { UserAccountApplicationService } from "./application-service/user-account"
import { PeerBonusResolver } from "./resolvers/peer-bonus"
import { UserAccountResolver } from "./resolvers/user-account"

const resolvers = [PeerBonusResolver, UserAccountResolver]
const services = [
  PeerBonusApplicationService,
  SessionApplicationService,
  UserAccountApplicationService,
]

@Module({
  imports: [
    GraphQLModule.forRoot({
      // autoSchemaFile: join(
      //   require.resolve("pb-schema"),
      //   "../", // dist/index.js を起点にpathの解決をするので、1階層戻って指定する必要がある
      //   "schema.graphql"
      // ),
      typePaths: [
        join(
          require.resolve("pb-schema"),
          "../", // dist/index.js を起点にpathの解決をするので、1階層戻って指定する必要がある
          "schema.graphql"
        ),
      ],
      // definitions: {
      //   path: join(require.resolve("pb-schema"), "../", "index.d.ts"),
      // },
      cors: {
        origin: true,
        credentials: true,
      },
      context: ({ req, res }) => ({ req, res }),
    }),
  ],
  providers: [...resolvers, ...services],
})
export class AppModule {}
