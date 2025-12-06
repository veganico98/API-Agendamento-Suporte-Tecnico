import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgendamentoConfig, AgendamentoConfigSchema } from './schema/agendamento-config.schema';
import { AgendamentoController } from './agendador.controller';
import { AgendamentoService } from './agendador.service';
import { AgendamentoConfigRepository } from './repository/agendamento-config.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AgendamentoConfig.name, schema: AgendamentoConfigSchema }
    ])
  ],
  controllers: [AgendamentoController],
  providers: [AgendamentoService, AgendamentoConfigRepository]
})
export class AgendamentoModule {}