import { Controller, Post, Get, Patch, Body, Query, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AgendamentoService } from './agendador.service';
import { CreateAgendamentoConfigDto } from './dto/create-agendamento.config.dto';
import { QueryAgendadorConfigDto } from './dto/query-agendamento-config.dto';
import { ParamIdAgendadorDto } from './dto/param-id-agendamento-config.dto';
import { UpdateAgendadorConfigDto } from './dto/update-agendamento-config.dto';

@Controller('agendamento')
export class AgendamentoController {

    constructor(
        private agendamentoService: AgendamentoService
    )
    {}

    @UseGuards(AuthGuard('jwt'))
    @Post('/config')
    async createConfig(@Body() body: CreateAgendamentoConfigDto) {
        const config = await this.agendamentoService.createConfig(body)

        return {
            message: "criado com sucesso",
            config
        }
    }

    @Get('/config')
    async getConfig(@Query() query: QueryAgendadorConfigDto) {
        const configs = await this.agendamentoService.getConfigs(query.status)

        return {
            total: configs.length,
            configs,
            query
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch('/config/:id')
    async updateConfig(
        @Param() param: ParamIdAgendadorDto,
        @Body() body: UpdateAgendadorConfigDto
    ) {
        const update = await this.agendamentoService.updateConfig(param.id, body)

        return {
            update
        }
    }
}