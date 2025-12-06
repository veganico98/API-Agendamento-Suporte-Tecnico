import { IsString, IsArray, IsIn, IsBoolean, IsOptional, ValidateNested } from "class-validator"
import { Type } from "class-transformer";

export class AgendamentoFieldDto {
    @IsString()
    type: string;

    @IsBoolean()
    required: boolean;

    @IsString()
    label: string;

    @IsString()
    placeholder: string;

    @IsOptional()
    @IsArray()
    options?: any[];
}

export class CreateAgendamentoConfigDto {
    @IsString()
    name: string
    
    @IsString()
    description: string
    
    @IsString()
    color: string

    @IsArray()
    @Type(() => AgendamentoFieldDto) 
    @ValidateNested({ each: true })
    fields: AgendamentoFieldDto[]

    @IsArray()
    @IsIn(["segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo"], { each: true })
    weekdays: string[]
}