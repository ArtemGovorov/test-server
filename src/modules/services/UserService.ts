import { Component, Inject } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from '../entities/UserEntity'
import { AbstractService } from '../core/AbstractService'

@Component()
export class UserService extends AbstractService<User> {
  readonly repository: Repository<User>

  constructor (
    @Inject('UserRepositoryToken') userRepository: Repository<User>
  ) {
    super()
    this.repository = userRepository
  }

  public seed (): Promise<void> {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }
}
