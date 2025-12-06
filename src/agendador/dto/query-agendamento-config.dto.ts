import { IsOptional, IsBoolean } from "class-validator"
import { Transform } from "class-transformer";

export class QueryAgendadorConfigDto {
    @IsOptional()
    @IsBoolean()
    @Transform(( { value }) => value === 'true' )
    status?: boolean;
}