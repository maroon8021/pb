import { createParamDecorator, ExecutionContext } from "@nestjs/common"

import { Request } from "express"
import { Organization } from "src/entites/organization"
import { UserAccount } from "src/entites/user-account"

export type Context = {
  userAccount: UserAccount
  organization: Organization
  isLogin: boolean
}

export const Context = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>()
    const { userAccount, organization } = request

    return {
      userAccount,
      organization,
      isLogin: userAccount && organization,
    }
  }
)
