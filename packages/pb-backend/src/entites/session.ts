import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { UserAccount } from "./user-account"

type SessionInput = {
  userAccount: UserAccount
  expiresAt: Date
}

const EXPIRES_LIEFSPAN = 1000 * 60 * 60 // Dateがミリ秒換算なので、1000ミリ秒 * 60秒 * 60 -> 1時間

@Entity({ name: "Session" })
export class Session {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string

  @ManyToOne(() => UserAccount)
  @JoinColumn()
  readonly userAccount!: UserAccount

  @Column()
  readonly userAccountId: string

  @Column()
  readonly expiresAt: Date

  @CreateDateColumn()
  readonly createdAt: Date

  @CreateDateColumn()
  readonly updatedAt: Date

  constructor(attrs?: SessionInput) {
    if (!attrs) {
      return this
    }
    this.userAccount = attrs.userAccount
    this.expiresAt = attrs.expiresAt
  }

  isExpired() {
    return this.expiresAt.getTime() < new Date().getTime()
  }

  static extendExpiredAt() {
    const now = new Date()
    return new Date(now.getTime() + EXPIRES_LIEFSPAN)
  }
}
