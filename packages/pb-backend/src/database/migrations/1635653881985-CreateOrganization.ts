import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateOrganization1635653881985 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)

    await queryRunner.createTable(
      new Table({
        name: "Organization",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "domain",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "monthlyPoint",
            type: "int",
          },
          {
            name: "createdAt",
            type: "timestamptz(3)",
            default: "NOW()",
          },
          {
            name: "updatedAt",
            type: "timestamptz(3)",
            default: "NOW()",
          },
        ],
      }),
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Organization")
  }
}
