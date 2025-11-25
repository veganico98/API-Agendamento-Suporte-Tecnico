import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { User, UserSchema } from './schema/user.schema';
import { UserRepository } from './repository/user.repository';
import { UserController } from './user.controller';
import { BcryptHelper } from './helpers/bcrypt.helpers';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository, BcryptHelper],
  exports: []
})
export class UserModule{}