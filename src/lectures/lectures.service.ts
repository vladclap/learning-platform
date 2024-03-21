import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lecture } from './lecture.model';

@Injectable()
export class LecturesService {
  constructor(
    @InjectModel(Lecture.name) private readonly lectureModel: Model<Lecture>,
  ) {}

  async create(lecture: Lecture): Promise<Lecture> {
    const createdLecture = new this.lectureModel(lecture);
    return createdLecture.save();
  }

  async findAll(): Promise<Lecture[]> {
    return this.lectureModel.find().exec();
  }

  async findOne(id: string): Promise<Lecture> {
    return this.lectureModel.findById(id).exec();
  }

  async update(id: string, lecture: Lecture): Promise<Lecture> {
    return this.lectureModel
      .findByIdAndUpdate(id, lecture, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Lecture> {
    return this.lectureModel.findByIdAndDelete(id).exec();
  }
}
