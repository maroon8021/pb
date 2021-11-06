import { Injectable } from "@nestjs/common"
import { Session } from "src/entites/session"
import { getRepository } from "typeorm"

@Injectable()
export class SessionApplicationService {
  async getSessionAndUserInformation(id: string) {
    return getRepository(Session).findOneOrFail(id, {
      relations: ["UserAccount", "UserAccount.Organization"],
    })
  }

  async updateSession(id: string) {
    return getRepository(Session).update(id, {
      expiresAt: Session.extendExpiredAt(),
    })
  }
}
