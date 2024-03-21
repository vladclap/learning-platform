import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { LecturesService } from './lectures.service';
import { Lecture } from './lecture.model';

@Controller('lectures')
export class LecturesController {
  constructor(private readonly lecturesService: LecturesService) {}

  @Post()
  async create(@Body() createLectureDto: Lecture): Promise<Lecture> {
    return this.lecturesService.create(createLectureDto);
  }

  @Get()
  async findAll(): Promise<Lecture[]> {
    return this.lecturesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Lecture> {
    return this.lecturesService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLectureDto: Lecture,
  ): Promise<Lecture> {
    return this.lecturesService.update(id, updateLectureDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Lecture> {
    return this.lecturesService.remove(id);
  }
}
