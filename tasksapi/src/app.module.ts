import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://testuser:testpass@localhost:27017/tasks?authSource=admin'),
   TasksModule],
})
export class AppModule {}
