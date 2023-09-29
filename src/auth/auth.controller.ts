import { Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtGuard } from './guard/jwt.guard';
import { RoleGuard } from './guard/role.guard';
import { Role } from '../user/enum/role.enum';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) { }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req) {

    return this.authService.login(req.user)

  }

  @Get('/manager')
  @UseGuards(JwtGuard, new RoleGuard(Role.MANAGE))
  manager(@Req() payload: any) {

    // console.log(payload.user)

    return 'OK manager' + JSON.stringify(payload.user)

  }

  @Get('admin')
  @UseGuards(JwtGuard, new RoleGuard(Role.ADMIN))
  admin(@Req() payload: any) {

    // console.log(payload.user)

    return 'OK admin' + JSON.stringify(payload.user)

  }

  @Get('user')
  @UseGuards(JwtGuard, new RoleGuard(Role.USER))
  user(@Req() payload: any) {

    // console.log(payload.user)

    return 'OK users' + JSON.stringify(payload.user)

  }

}
