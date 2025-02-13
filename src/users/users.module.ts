import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserSchema } from './schema/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports:[MongooseModule.forFeature([{name:'User',schema:UserSchema}])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
