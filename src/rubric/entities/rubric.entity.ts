import { Criteria } from "src/criteria/entities/criteria.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rubric {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @OneToMany(() => Criteria, (criteria) => criteria.rubric, { cascade: true })
    criterias: Criteria[]; 
}
