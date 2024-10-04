import { Entity } from "typeorm";
import { Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Skills {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    description: string

}
