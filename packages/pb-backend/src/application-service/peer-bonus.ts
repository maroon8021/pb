import { Injectable } from "@nestjs/common"
import { PeerBonus } from "src/entites/peer-bonus"
import { getRepository } from "typeorm"

@Injectable()
export class PeerBonusApplicationService {
  async getPeerBonusList(organizationId: string) {
    return getRepository(PeerBonus).find({
      where: {
        id: organizationId,
      },
      order: {
        createdAt: "DESC",
      },
      relations: ["UserAccount"],
    })
  }
}
