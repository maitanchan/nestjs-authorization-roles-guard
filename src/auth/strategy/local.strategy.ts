import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "src/user/entities/user.entity";
import { UserService } from "../../user/user.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly userService: UserService) {

        super()

    }

    async validate(username: string, password: string): Promise<User> {


        const user: User = await this.userService.getUserByUsername(username)

        if (user === undefined) {
            throw new UnauthorizedException()
        }

        if (user !== undefined && user.password == password) {

            return user

        } else {

            throw new UnauthorizedException()

        }

    }


}