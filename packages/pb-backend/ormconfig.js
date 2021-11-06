const isMigration = process.env.IS_MIGRATION === "true"
const isInsertFixture = process.env.IS_INSERT_FIXTURE === "true"
const isTest = process.env.NODE_ENV === "test"

const useTSFiles = isMigration || isInsertFixture || isTest

module.exports = {
  type: "postgres",
  // 一旦ローカル開発しか想定していないので、ローカルで利用する値を直書きしている。
  host: "localhost",
  port: 50001,
  username: "superuser",
  password: "superuserpass",
  database: "pb",
  logging: !isTest ?? true,
  migrations: useTSFiles
    ? ["src/database/migrations/**/*.ts"]
    : ["dist/database/migrations/**/*.js"],
  entities: useTSFiles ? ["src/entites/**/*.ts"] : ["dist/entites/**/*.js"],
}
