import { UseGuards } from "@nestjs/common"
import { Query, Resolver } from "@nestjs/graphql"
import { PeerBonusApplicationService } from "src/application-service/peer-bonus"
import { Context } from "src/utils/decorators/context"
import { GqlAuthGuard } from "src/utils/gurads/auth"

@Resolver()
export class PeerBonusResolver {
  constructor(
    private peerBonusApplicationService: PeerBonusApplicationService = new PeerBonusApplicationService()
  ) {}
  @UseGuards(GqlAuthGuard)
  @Query()
  peerBonusList(@Context() context: Context) {
    return this.peerBonusApplicationService.getPeerBonusList(
      context.organization.id
    )
  }
}
