import { Organization } from "src/entites/organization"
import { UserAccount } from "src/entites/user-account"
import { EntityManager } from "typeorm"
import { Fixture } from "../interface"
import { AOrganization } from "./organization"

const adminUserInAOrganization = {
  id: "00000000-aaaa-0000-0000-000000000001",
  displayName: "管理者ユーザー",
  userName: "admin",
  email: "admin@a.pb.co.jp",
  password: "y8TjDi3065jcvK9wiN9Mwu8CWQ4CQlGsyocO4wNTSJY=", // password
  // organizationId: AOrganization.id,
}

const normalUserInAOrganization = {
  id: "00000000-aaaa-0000-0000-000000000002",
  displayName: "普通ユーザー",
  userName: "normal",
  email: "normal@a.pb.co.jp",
  password: "y8TjDi3065jcvK9wiN9Mwu8CWQ4CQlGsyocO4wNTSJY=",
  // organizationId: AOrganization.id,
}

const data = [adminUserInAOrganization, normalUserInAOrganization]

export class UserAccountFixture extends Fixture {
  async run(manager: EntityManager) {
    const organization = await manager
      .getRepository(Organization)
      .findOneOrFail(AOrganization.id)
    const repository = manager.getRepository(UserAccount)
    await repository.save(data.map((d) => ({ ...d, organization })))
  }
}
