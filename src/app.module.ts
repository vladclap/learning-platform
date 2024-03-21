import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { LecturesModule } from './lectures/lectures.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://vfisiak:Solvd2024VF@learnplatform.8dv0r21.mongodb.net/?retryWrites=true&w=majority&appName=LearnPlatform',
      {},
    ),
    LecturesModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
