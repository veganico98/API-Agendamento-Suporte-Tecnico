import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schema/user.schema';
import { BcryptHelper } from './helpers/bcrypt.helpers';
import { UserParamDto } from './dto/user-param.dto';

@Injectable()
export class UserService {
    constructor(
        private userRepository: UserRepository,
        private bcryptHelpers: BcryptHelper,
        private userParamDto: UserParamDto
    )
    {}

    async create(data: CreateUserDto): Promise<User>{

        const userExist = await this.userRepository.findOne({
            email: data.email

        })

        if(userExist){
            throw new  BadRequestException('Este email já foi utilizado')
        }

        data.password = await this.bcryptHelpers.hash(data.password)

        const payload = {
            ...data,
            status: false
        } as User

        const created = await this.userRepository.create(payload)

        if(!created){
            throw new InternalServerErrorException("Ocorreu um erro interno")
        }
        return created
    }

    async getAll(): Promise<User[]>{
        const user = await this.userRepository.findAll()

        return user;
    }

    async getById(id: string): Promise<User>{
        const user = await this.userRepository.findById(id)

        if(!user){
            throw new NotFoundException("Usuário não encontrato")
        }

        return user
    }

    async delete(id: any){
        const userDeleted = await this.userRepository.delete(id)

        if(!userDeleted){
            throw new InternalServerErrorException("Ocorreu um erro interno")
        }
        return userDeleted
    }
    
    async update(id: string, data: Partial<CreateUserDto>){
        const userUpdate = await this.userRepository.update(id, data)

        return userUpdate;
    }
}
