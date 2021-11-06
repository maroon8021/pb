import { Query, Resolver } from "@nestjs/graphql"

@Resolver()
export class OrganizationResolver {
  @Query(() => String)
  sayHello(): string {
    return "Hello World!"
  }
}
