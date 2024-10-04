import { Rubric } from "src/rubric/entities/rubric.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Criteria {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('text')
    description: string;

    @Column('int')
    percentage: number;

    @ManyToOne(() => Rubric, (rubric) => rubric.criterias)
    @JoinColumn({ name: 'rubric_id' })
    rubric: Rubric; 
}
