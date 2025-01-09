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
    enrollmentDate: Date;

    @Column()
    createdAt: Date;
    
    @Column()
    updatedAt: Date;
}