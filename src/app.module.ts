import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AgendamentoModule } from './agendador/agendador.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/suporte_tecnico'),
    UserModule,
    AuthModule,
    AgendamentoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
