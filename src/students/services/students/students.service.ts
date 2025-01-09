import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/typeorm/entities/student';
import { CreateStudentParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {

    constructor(
        @InjectRepository(Student) private studentRepository: Repository<Student>,
    ) {}

    createStudent(studentDetails: CreateStudentParams){
        const newStudent = this.studentRepository.create({...studentDetails,  createdAt: new Date(), });
        this.studentRepository.save(newStudent);
    }
}
