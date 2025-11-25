import { Controller, Post, Get, Param, Body, Delete, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schema/user.schema';
import { UserParamDto } from './dto/user-param.dto';


@Controller('users')
export class UserController {
    constructor(private userService: UserService){ 
    }

    @Post()
    async create(@Body() body: CreateUserDto): Promise<Object> {
        
        const user = await this.userService.create(body)

        return {
            message: "cadastrado com sucesso",
            user: {
                email: user.email,
                nome: user.nome
            }
        }
    }

    @Get()
    async getAll() {
        const users = await this.userService.getAll()

        return {
            message: "Consulta realizada!",
            total: users.length,
            users,

        }
    }

    @Get('/:id')
    async get(@Param('id') param: any) {
        const user = await this.userService.getById(param.id)

        return {
            message: "Consulta realizad com sucesso",
            user
        }
    }  

    @Delete('/:id')
    async delete(@Param() param: UserParamDto)
    {
        const user = await this.userService.delete(param.id)
        return {
            message: "usuário deletado com sucesso",
            user
        }
    }

    @Patch('/:id')
    async update(
        @Param() param: UserParamDto,
        @Body() body: Partial<CreateUserDto>
    ) {
        const user = await this.userService.update(param.id, body)
        return {
            message: "usuário atualizado com sucesso",
            user
        }
    }
}