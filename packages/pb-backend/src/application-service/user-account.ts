import { Injectable } from "@nestjs/common"
import { Organization } from "src/entites/organization"
import { Session } from "src/entites/session"
import { UserAccount } from "src/entites/user-account"
import { getRepository, Not } from "typeorm"

type LoginInput = {
  email: string
  password: string
}

type GetOtherUsersInOrganizationInput = {
  organizationId: string
  userAccountId: string
}

@Injectable()
export class UserAccountApplicationService {
  async login({ email, password }: LoginInput) {
    const userAccount = await getRepository(UserAccount).findOneOrFail({
      where: {
        email,
      },
      relations: ["Organization"],
    })
    console.log("userAccount", userAccount)
    const o = await getRepository(Organization).findOneOrFail(
      userAccount.organizationId
    )
    console.log("o", o)

    if (!userAccount.isCorrectPassword(password)) {
      throw new Error("password is incorrect")
    }

    const session = await getRepository(Session).save(
      new Session({
        userAccount,
        expiresAt: Session.extendExpiredAt(),
      })
    )

    const s = await getRepository(Session).findOneOrFail(session.id, {
      relations: ["UserAccount", "UserAccount.Organization"],
    })
    console.log("s", s)

    return {
      userAccount,
      session,
    }
  }

  async getOtherUsersInOrganization({
    organizationId,
    userAccountId,
  }: GetOtherUsersInOrganizationInput) {
    return getRepository(UserAccount).find({
      where: {
        organizationId,
        id: Not(userAccountId),
      },
    })
  }
}
