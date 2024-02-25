import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'Alan'})
    @IsNotEmpty()
    readonly username: string;

    @ApiProperty({ example: 'Alan123'})
    @IsNotEmpty()
    readonly password: string;

    @ApiProperty({ example: 'Alan@gmail.com'})
    @IsNotEmpty()
    readonly email: string;
}