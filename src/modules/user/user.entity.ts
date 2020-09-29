import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "varchar", unique: true, length: 25, nullable: false})
    username: string;

    @Column({type: "varchar", nullable: false})
    email: string;

    @Column({type: "varchar", nullable: false})
    password: string;

    @Column({type: "varchar", default: "ACTIVE", length: 8})
    status: string;

    @Column({type: "time", name: "created_at"})
    createdAt: string;

    @Column({type: "time", name: "updated_at"})
    updatedAt: string;

}