import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AgendamentoConfig extends Document {
    @Prop()
    name: string
    
    @Prop()
    description: string

    @Prop()
    color: string

    @Prop()
    fields: object[]

    @Prop()
    weekdays: string[]

    @Prop()
    status: boolean
}

export const AgendamentoConfigSchema = SchemaFactory.createForClass(AgendamentoConfig);