import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'students' })
export class Student{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: String;

    @Column()
    lastName: String;

    @Column()
    email: String;

    @Column()
    enrollmentDate: String;

    @Column()
    createdAt: Date;
    
    @Column({nullable: true})
    updatedAt: Date;
}