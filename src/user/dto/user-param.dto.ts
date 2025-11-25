import { IsNotEmpty, IsString } from "class-validator";

export class UserParamDto{
    @IsString()
    @IsNotEmpty()
    id: string
}

