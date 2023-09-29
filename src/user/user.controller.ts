import { Controller, Get, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Get()
  getUserByUsername(@Body() username: string) {

    return this.userService.getUserByUsername(username)

  }


}
