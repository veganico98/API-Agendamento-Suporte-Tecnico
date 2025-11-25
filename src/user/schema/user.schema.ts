import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  nome: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  status: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);