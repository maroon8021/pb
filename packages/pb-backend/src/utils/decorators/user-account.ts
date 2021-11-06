import { createParamDecorator, ExecutionContext } from "@nestjs/common"

import { Request } from "express"

export const UserAccount = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>()
    const { userAccount } = request

    return userAccount
  }
)
