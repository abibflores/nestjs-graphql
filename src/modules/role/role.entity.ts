import { User } from './../user/user.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn } from "typeorm";

@Entity("roles")
export class Role extends BaseEntity {

    @PrimaryGeneratedColumn("increment")
    id: string;

    @Column({type: "varchar", length: 20, nullable: false})
    name: string;

    @Column({type: "text", nullable: false})
    description: string;

    @ManyToMany(type => User, user => user.roles)
    @JoinColumn()
    users: User[];

    @Column({type: "varchar", default: "ACTIVE", length: 8})
    status: string;

    @Column({type: "time", name: "created_at"})
    createdAt: string;

    @Column({type: "time", name: "updated_at"})
    updatedAt: string;

}