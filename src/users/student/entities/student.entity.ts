import { Column, Entity, OneToMany, PrimaryGeneratedColumn  } from "typeorm";

@Entity()
export class Student {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    last_name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    student_code: string

    // Relation with Schedule
    // Relation with User_Courser
    // Relation with Skill_Student
    // Relation with Student_team



    
}