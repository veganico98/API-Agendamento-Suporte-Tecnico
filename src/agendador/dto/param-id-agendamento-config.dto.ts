import { IsMongoId } from "class-validator";

export class ParamIdAgendadorDto {
    @IsMongoId()
    id: string
}