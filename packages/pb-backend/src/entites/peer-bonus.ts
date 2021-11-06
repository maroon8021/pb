import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Organization } from "./organization"
import { UserAccount } from "./user-account"

type PeerBonusInput = {
  id?: string
  message: string
  point: number
  fromUserAccount: UserAccount
  toUserAccount: UserAccount
  organization: Organization
}

@Entity({ name: "PeerBonus" })
export class PeerBonus {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string

  @Column()
  message: string

  @Column()
  point: number

  @ManyToOne(() => UserAccount)
  readonly fromUserAccount!: UserAccount

  @ManyToOne(() => UserAccount)
  readonly toUserAccount!: UserAccount

  @ManyToOne(() => Organization)
  readonly organization!: Organization

  @CreateDateColumn()
  readonly createdAt: Date

  @CreateDateColumn()
  readonly updatedAt: Date

  constructor(attrs?: PeerBonusInput) {
    if (!attrs) {
      return this
    }
    if (attrs.id) this.id = attrs.id
    this.message = attrs.message
    this.point = attrs.point
    this.fromUserAccount = attrs.fromUserAccount
    this.toUserAccount = attrs.toUserAccount
    this.organization = attrs.organization
  }
}
