// agrega todos los metodos para la base de datos

import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User>{}