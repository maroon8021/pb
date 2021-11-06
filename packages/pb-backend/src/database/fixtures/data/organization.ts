import { Organization } from "src/entites/organization"
import { EntityManager } from "typeorm"
import { Fixture } from "../interface"

export const AOrganization = {
  id: "00000000-aaaa-0000-0000-000000000001",
  name: "A 株式会社",
  domain: "a-company",
  monthlyPoint: 1000,
}

const BOrganization = {
  id: "00000000-aaaa-0000-0000-000000000002",
  name: "B 株式会社",
  domain: "b-company",
  monthlyPoint: 2000,
}

const data = [AOrganization, BOrganization]

export class OrganizationtFixture extends Fixture {
  async run(manager: EntityManager) {
    const repository = manager.getRepository(Organization)
    await repository.save(data)
  }
}
