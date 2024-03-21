import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Lecture extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  material: string;

  @Prop()
  videoLink: string;

  @Prop()
  assignment: string;
  @Prop()
  teacher: string;

  @Prop()
  maxGrade: number;

  @Prop()
  date: Date;
}

export const LectureSchema = SchemaFactory.createForClass(Lecture);
