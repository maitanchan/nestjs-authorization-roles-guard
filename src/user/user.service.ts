import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Role } from './enum/role.enum';

@Injectable()
export class UserService {

  public users: User[] = [
    {
      id: 1,
      username: 'tanUser',
      password: '123',
      email: 'tanuser@gmail.com',
      age: 21,
      roles: Role.ADMIN
    },
    {
      id: 2,
      username: 'chienUser',
      password: '123',
      email: 'chienuser@gmail.com',
      age: 21,
      roles: Role.USER
    },
    {
      id: 3,
      username: 'tungUser',
      password: '123',
      email: 'tunguser@gmail.com',
      age: 21,
      roles: Role.MANAGE
    },
  ]

  async getUserByUsername(username: string): Promise<User> {

    const user = this.users.find(user => user.username === username)

    return user

  }

}
