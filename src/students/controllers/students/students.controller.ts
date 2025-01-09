import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { StudentsService } from '../../services/students/students.service';
import { CreateStudentDto } from '../../dtos/CreateStudent.dto';
import { UpdateStudentDto } from 'src/students/dtos/UpdateStudent.dto';

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

    @Patch(':id')
    async updateStudent(@Param('id', ParseIntPipe) id: number, @Body() updateStudentDto:UpdateStudentDto,){
        await this.studentsService.updateStudent(id, updateStudentDto)
    }
}
