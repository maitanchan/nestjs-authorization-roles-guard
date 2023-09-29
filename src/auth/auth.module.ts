import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt'
import { JwtStratrgy } from './strategy/jwt.strategy';

@Module({

  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({

      secret: 'secret-key',
      signOptions: { expiresIn: '1h' }

    })
  ],

  controllers: [
    AuthController
  ],

  providers: [
    AuthService,
    LocalStrategy,
    JwtStratrgy
  ]

})
export class AuthModule { }
