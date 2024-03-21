import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserRole = 'student' | 'teacher';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ type: String, enum: ['student', 'teacher'], default: 'student' })
  role: UserRole;

  @Prop({ unique: true })
  username: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
