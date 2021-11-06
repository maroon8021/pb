import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm"

type OrganizationInput = {
  id?: string
  name: string
  monthlyPoint: number
}

@Entity({ name: "Organization" })
export class Organization {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string

  @Column()
  name: string

  @Column()
  domain: string

  @Column()
  monthlyPoint: number

  @CreateDateColumn()
  readonly createdAt: Date

  @CreateDateColumn()
  readonly updatedAt: Date

  constructor(attrs?: OrganizationInput) {
    if (!attrs) {
      return this
    }
    if (attrs.id) this.id = attrs.id
    this.name = attrs.name
    this.monthlyPoint = attrs.monthlyPoint
  }
}
