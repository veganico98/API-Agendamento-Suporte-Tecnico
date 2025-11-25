import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "../schema/user.schema";
import { Model } from "mongoose";

@Injectable()
export class UserRepository{
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>
    )
    {}

    create(data: User): Promise<User | null>{
        const createUser = new this.userModel(data)
        return createUser.save()
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find()
    }

    findById(id: string){
        return this.userModel.findById(id)
    }

    findOne(filter: object = {}): Promise<User | null>{
        return this.userModel.findOne(filter)
    }

    async update(id: string, data: Partial<User>){
        return this.userModel.findByIdAndUpdate(id, data, {
            new: true
        })    
    }
    async delete(id: string): Promise<User | null>{
        return this.userModel.findByIdAndDelete(id)
    }
}