import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { AgendamentoConfig } from './schema/agendamento-config.schema';
import { AgendamentoConfigRepository } from './repository/agendamento-config.repository';

@Injectable()
export class AgendamentoService {

    constructor(
        private agendamentoConfigRepository: AgendamentoConfigRepository
    )
    {}

    async createConfig(body: Partial<AgendamentoConfig>): Promise<AgendamentoConfig> {
        body.status = false;

        const config = await this.agendamentoConfigRepository.create(body)

        if (!config) {
            throw new InternalServerErrorException("Ocorreu um erro interno")
        }

        return config
    }

    async getConfigs(status?: boolean): Promise<AgendamentoConfig[]> {
        const filter = {};

        if (status == true) {
            filter['status'] = true
        }

        const config = await this.agendamentoConfigRepository.findAll(filter)

        return config
    }

    async updateConfig(id: string, body: Partial<AgendamentoConfig>): Promise<AgendamentoConfig> {
        if (body.status === true) {
            const allConfigs = await this.agendamentoConfigRepository.findAll({
                status: true
            })

            for (const config of allConfigs) { 
                config.status = false
                await this.agendamentoConfigRepository.update(config.id, config)
            }
        }

        const registerExists = await this.agendamentoConfigRepository.findById(id)

        if (!registerExists) {
            throw new NotFoundException('Id não encontrado')
        }

        const config = await this.agendamentoConfigRepository.update(id, body)

        if (!config) {
            throw new InternalServerErrorException("Ocorreu um erro interno")
        }

        return config
    }

}