import { Column, Entity, ManyToMany } from 'typeorm'

import { Base } from '../database/utils/base.entity'
import { User } from '../users/user.entity'
import { Roles } from './enums/roles.enum'

@Entity({ name: 'roles' })
export class Role extends Base {
  @Column({ default: Roles.Basic })
  public name: Roles

  @ManyToMany(() => User, (user: User) => user.roles)
  public users: User[]
}
