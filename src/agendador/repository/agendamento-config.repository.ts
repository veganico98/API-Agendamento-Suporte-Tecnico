import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AgendamentoConfig } from "../schema/agendamento-config.schema";

@Injectable()
export class AgendamentoConfigRepository {
    constructor(
        @InjectModel(AgendamentoConfig.name)
        private agendamentoConfig: Model<AgendamentoConfig>
    )
    {}

    create(data: Partial<AgendamentoConfig>): Promise<AgendamentoConfig | null> {
        const createUser = new this.agendamentoConfig(data)

        return createUser.save()
    }

    async findAll(filter: object = {}): Promise<AgendamentoConfig[]> {
        return this.agendamentoConfig.find(filter)
    }

    async findById(id: string): Promise<AgendamentoConfig | null> {
        return this.agendamentoConfig.findById(id)
    }

    async findOne(filter: object = {}): Promise<AgendamentoConfig | null> {
        return this.agendamentoConfig.findOne(filter)
    }

    async update(id: string, data: Partial<AgendamentoConfig>): Promise<AgendamentoConfig | null> {
        return this.agendamentoConfig.findByIdAndUpdate(id, data, {
            new: true
        })
    }

    async delete(id: string): Promise<AgendamentoConfig | null> {
        return this.agendamentoConfig.findByIdAndDelete(id)
    }
}