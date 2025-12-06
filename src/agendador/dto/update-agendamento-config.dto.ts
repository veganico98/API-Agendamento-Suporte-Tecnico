import { IsString, IsArray, IsIn, IsBoolean, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class AgendadorFieldDto {
    @IsOptional()
    @IsString()
    type?: string;

    @IsOptional()
    @IsBoolean()
    required?: boolean;

    @IsOptional()
    @IsString()
    label?: string;

    @IsOptional()
    @IsString()
    placeholder?: string;

    @IsOptional()
    @IsArray()
    options?: any[];
}

export class UpdateAgendadorConfigDto {
    @IsOptional()
    @IsString()
    name?: string;
    
    @IsOptional()
    @IsString()
    description?: string;
    
    @IsOptional()
    @IsString()
    color?: string;

    @IsOptional()
    @IsArray()
    @Type(() => AgendadorFieldDto)
    @ValidateNested({ each: true })
    fields?: AgendadorFieldDto[];

    @IsOptional()
    @IsArray()
    @IsIn(["segunda", "terca", "quarta", "quinta", "sexta", "sabado", "domingo"], { each: true })
    weekdays?: string[];

    @IsOptional()
    @IsBoolean()
    status?: boolean;
}
