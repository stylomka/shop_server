import { ApiProperty } from "@nestjs/swagger";

export class LoginUserRequest {
    @ApiProperty({ example: 'Alan' })
    username: string;

    @ApiProperty({ example: 'Alan123' })
    password: string;
}

export class LoginUserResponse {
    @ApiProperty({ example: {user: {
        userId: 1,
        username: 'Alan',
        password: 'Alan123'
    }} })
    user: {
        userId: number;
        username: string;
        password: string
    };

    @ApiProperty({ example: 'Logged in' })
    msg: string;
}

export class LogoutUserResponse {
    @ApiProperty({ example: 'session has anded' })
    msg: string;
}

export class LoginCheckUserResponse {
    @ApiProperty({ example: '1' })
    userId: number;

    @ApiProperty({ example: 'Alan' })
    username: string;

    @ApiProperty({ example: 'Alan@gmail.com' })
    email: string;
}

export class SignUpResponse {
    @ApiProperty({ example: '1' })
    id: number;

    @ApiProperty({ example: 'Sasha_Golovin' })
    username: string;

    @ApiProperty({ example: '$2b$10$EO68VHHk58PYHTrA54gYW.tNsrvZzmp3r40OB57qFcHOI2pidMbYG' })
    password: string;

    @ApiProperty({ example: 'Golovin@gmail.com' })
    email: string;

    @ApiProperty({ example: '2024-02-15T18:48:54.504Z' })
    updatedAt: string;

    @ApiProperty({ example: '2024-02-15T18:48:54.504Z' })
    createdAt: string;
}