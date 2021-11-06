import type { Organization } from "./entites/organization"
import type { UserAccount } from "./entites/user-account"

declare global {
  namespace Express {
    interface Request {
      userAccount?: UserAccount
      organization?: Organization
    }
  }
}
