import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import powerCrypt from "power-crypt"
import { Organization } from "./organization"

type UserAccountInput = {
  id?: string
  displayName: string
  userName: string
  email: string
  password: string
  organization: Organization
}

@Entity({ name: "UserAccount" })
export class UserAccount {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string

  @Column()
  displayName: string

  @Column()
  userName: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  organizationId: string

  @ManyToOne(() => Organization)
  readonly organization!: Organization

  @CreateDateColumn()
  readonly createdAt: Date

  @CreateDateColumn()
  readonly updatedAt: Date

  constructor(attrs?: UserAccountInput) {
    if (!attrs) {
      return this
    }
    if (attrs.id) this.id = attrs.id
    this.displayName = attrs.displayName
    this.userName = attrs.userName
    this.email = attrs.email
    this.password = attrs.password
    this.organization = attrs.organization
  }

  isCorrectPassword(password: string) {
    return powerCrypt(password) === this.password
  }

  static createHashPassword(password: string) {
    return powerCrypt(password)
  }
}
