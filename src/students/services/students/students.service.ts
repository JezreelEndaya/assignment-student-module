import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/typeorm/entities/student';
import { CreateStudentParams, UpdateStudentParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { UpdateStudentDto } from '../../dtos/UpdateStudent.dto';

@Injectable()
export class StudentsService {

    constructor(
        @InjectRepository(Student) private studentRepository: Repository<Student>,
    ) {}

    createStudent(studentDetails: CreateStudentParams){
        const newStudent = this.studentRepository.create({...studentDetails,  createdAt: new Date(), });
        return this.studentRepository.save(newStudent);
    }

    findStudents(){
        return this.studentRepository.find();   
    }

    updateStudent(id: number, updateStudentDetails: UpdateStudentParams){
        return this.studentRepository.update({id},{...updateStudentDetails, updatedAt: new Date(), });
    }

    deleteStudent(id: number){
        return this.studentRepository.delete({id});
    }
}
