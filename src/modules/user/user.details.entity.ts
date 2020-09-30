import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserDetails extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "varchar", length: 50, nullable: false})
    name: string;

    @Column({type: "varchar", nullable: true})
    lastname: string;

    @Column({type: "varchar", default: "ACTIVE", length: 8})
    status: string;

    @Column({type: "time", name: "created_at"})
    createdAt: string;

    @Column({type: "time", name: "updated_at"})
    updatedAt: string;

}