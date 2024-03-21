import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LecturesController } from './lectures.controller';
import { LecturesService } from './lectures.service';
import { Lecture, LectureSchema } from './lecture.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Lecture.name, schema: LectureSchema }]),
  ],
  controllers: [LecturesController],
  providers: [LecturesService],
})
export class LecturesModule {}
