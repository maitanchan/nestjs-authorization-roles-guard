import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {

  constructor(private readonly jwtService: JwtService) { }

  signToken(payload: User): string {

    return this.jwtService.sign(payload)

  }

  async login(user: User) {

    const token = this.signToken(user)

    return token

  }

}
