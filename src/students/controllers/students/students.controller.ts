import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentsService } from '../../services/students/students.service';
import { CreateStudentDto } from '../../dtos/CreateStudent.dto';

@Controller('students')
export class StudentsController {

    constructor(private studentsService: StudentsService){}
    
    @Post()
    createStudent(@Body() createStudentDto: CreateStudentDto){
        return this.studentsService.createStudent(createStudentDto);
    }

    @Get()
    fetchStudents(){
        return this.studentsService.findStudents();
    }
}
