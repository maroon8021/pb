import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateSession1635664748110 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Session",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "userAccountId",
            type: "uuid",
          },
          {
            name: "expiresAt",
            type: "timestamptz(3)",
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
            columnNames: ["userAccountId"],
            referencedTableName: "UserAccount",
            referencedColumnNames: ["id"],
          },
        ],
      }),
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Session")
  }
}
