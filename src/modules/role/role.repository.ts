// agrega todos los metodos para la base de datos

import { Repository, EntityRepository } from "typeorm";
import { Role } from "./role.entity";

@EntityRepository(Role)
export class RoleRepository extends Repository<Role>{}