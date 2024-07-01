import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/users.schema';
@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private userModel:Model<User>){}
    //CREATE A USER
    async create(user:User):Promise<User>{
        const newUser=new this.userModel(user);
        return newUser.save();
    }

}
