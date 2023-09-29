import { Role } from "../enum/role.enum"

export class User {
    id: number
    username: string
    password: string
    email: string
    age: number
    roles: Role
}
