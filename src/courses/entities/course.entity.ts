import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
}
