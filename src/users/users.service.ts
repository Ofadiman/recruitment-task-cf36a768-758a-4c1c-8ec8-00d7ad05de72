import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { User } from './user.entity'

@Injectable()
export class UsersService {
  public constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}
}