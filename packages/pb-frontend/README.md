# フロントエンド

## バックエンドから openapi 経由で型情報を取得するやり方

```sh
yarn generate schema
```

これで `schema.ts` が生成されます。  
frontend で API 呼び出すときは上記から型を参照して、引数や返り値の型を指定してください
