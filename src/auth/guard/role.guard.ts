import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class RoleGuard implements CanActivate {

    private rolePassed: string

    constructor(role: string) {

        this.rolePassed = role

    }

    canActivate(context: ExecutionContext): boolean {

        const { user } = context.switchToHttp().getRequest()

        console.log(user)

        return this.rolePassed == user.payload.roles

    }

}