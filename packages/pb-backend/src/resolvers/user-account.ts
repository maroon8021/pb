import { UseGuards } from "@nestjs/common"
import { Args, Context, Mutation, Resolver, Query } from "@nestjs/graphql"
import { UserInputError } from "apollo-server-errors"
import { Response } from "express"
import { UserAccountApplicationService } from "src/application-service/user-account"
import { GQLLoginInput } from "pb-schema"
import { UserAccount } from "src/utils/decorators/user-account"
import type { UserAccount as UserAccountEntity } from "src/entites/user-account"
import type { Organization as OrganizationEntity } from "src/entites/organization"
import { Organization } from "src/utils/decorators/organization"
import { GqlAuthGuard } from "src/utils/gurads/auth"

@Resolver()
export class UserAccountResolver {
  constructor(
    private userAccountApplicationService: UserAccountApplicationService = new UserAccountApplicationService()
  ) {}
  @Mutation()
  async login(
    @Args("input") { email, password }: GQLLoginInput,
    @Context() ctx: { res: Response }
  ) {
    const { res } = ctx

    try {
      const { userAccount, session } =
        await this.userAccountApplicationService.login({ email, password })

      res.cookie("sid", session.id, {
        expires: session.expiresAt,
        httpOnly: true,
      })
      return userAccount
    } catch (error) {
      console.log(error)
      throw new UserInputError("some values might be wrong")
    }
  }

  @UseGuards(GqlAuthGuard)
  @Query()
  async otherUsersInOrganization(
    @UserAccount() userAccount: UserAccountEntity,
    @Organization() organization: OrganizationEntity
  ) {
    console.log("in")
    try {
      return this.userAccountApplicationService.getOtherUsersInOrganization({
        organizationId: organization.id,
        userAccountId: userAccount.id,
      })
    } catch (error) {
      console.log(error)
      throw new Error("wrong")
    }
  }
}
