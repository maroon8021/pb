import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUserAccount1635654092403 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "UserAccount",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "displayName",
            type: "varchar",
          },
          {
            name: "userName",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "organizationId",
            type: "uuid",
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
        foreignKeys: [
          {
            columnNames: ["organizationId"],
            referencedTableName: "Organization",
            referencedColumnNames: ["id"],
          },
        ],
      }),
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("UserAccount")
  }
}
