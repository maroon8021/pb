import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePeerBonus1635654709067 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "PeerBonus",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "fromUserAccountId",
            type: "uuid",
          },
          {
            name: "toUserAccountId",
            type: "uuid",
          },
          {
            name: "organizationId",
            type: "uuid",
          },
          {
            name: "point",
            type: "int",
          },
          {
            name: "message",
            type: "text",
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
            columnNames: ["fromUserAccountId"],
            referencedTableName: "UserAccount",
            referencedColumnNames: ["id"],
          },
          {
            columnNames: ["toUserAccountId"],
            referencedTableName: "UserAccount",
            referencedColumnNames: ["id"],
          },
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
    await queryRunner.dropTable("PeerBonus")
  }
}
