import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class Schedule {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column("text" ,{unique: true})
    day: string

    @Column("time", {unique: true})
    hour: string;
  
    @Column("text", {unique: true})
    state: string;

}
