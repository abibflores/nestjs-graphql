import { RoleRepository } from './role.repository';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Role } from "./role.entity";
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(RoleRepository)
        private readonly _roleRepository: RoleRepository,
    ){}

    async get(id: number): Promise<Role>{
        if(!id) {
            throw new BadRequestException("id must be sent");
        }

        const role: Role = await this._roleRepository.findOne(id, { where: { status: "ACTIVE" }});

        if (!role) {
            throw new  NotFoundException();
        }

        return role;
    }

    async getAll(): Promise<Role[]>{
        const roles: Role[] = await this._roleRepository.find({ where: { status: "ACTIVE" }});
        return roles;
    }

    async create(role: Role): Promise<Role> {

        const savedRole: Role = await this._roleRepository.save(role);
        return savedRole;
    }

    async update(id: number, role: Role): Promise<Role> {
        await this._roleRepository.update(id, role);
        return role;
    }

    async delete(id: number): Promise<void> {
        const roleExits =  await  this._roleRepository.findOne(id, { where: { status: "ACTIVE" } });

        if (!roleExits) {
            throw new NotFoundException();
        }

        await this._roleRepository.update(id, {status: "INACTIVE"});
    }
}
