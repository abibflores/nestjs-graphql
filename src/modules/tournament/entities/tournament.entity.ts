import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tournament {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idOpta: number;

  @Column()
  name: string;
}