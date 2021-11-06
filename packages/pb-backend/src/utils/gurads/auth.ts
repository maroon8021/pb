import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common"
import { AuthenticationError } from "apollo-server-errors"
//import { Reflector } from '@nestjs/core';
import { Request, Response } from "express"
import { SessionApplicationService } from "src/application-service/session"

@Injectable()
export class GqlAuthGuard implements CanActivate {
  //constructor(private reflector: Reflector) {}
  constructor(
    private sessionApplicationService: SessionApplicationService = new SessionApplicationService()
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>()
    const response = context.switchToHttp().getRequest<Response>()

    const sessionId = request?.cookies?.sid || null

    if (!sessionId) {
      throw new AuthenticationError("Session does not exist")
    }

    const session =
      await this.sessionApplicationService.getSessionAndUserInformation(
        sessionId
      )

    if (session.isExpired()) {
      response.clearCookie("sid")
      throw new AuthenticationError("Session is expired")
    }

    request.userAccount = session.userAccount
    request.organization = session.userAccount.organization

    return true
  }
}
