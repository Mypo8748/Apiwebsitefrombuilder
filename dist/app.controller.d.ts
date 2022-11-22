import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
export declare class AppController {
    private readonly appService;
    private jwtService;
    constructor(appService: AppService, jwtService: JwtService);
    register(name: string, email: string, password: string): Promise<{
        status_code: number;
        msg: string;
        user: Promise<import("./user.entity").User>;
    } | {
        status_code: number;
        msg: string;
        user?: undefined;
    }>;
    Login(email: string, password: string, response: Response): Promise<{
        message: string;
    }>;
    user(request: Request): Promise<{
        id: number;
        name: string;
        email: string;
    }>;
    Logout(response: Response): Promise<{
        message: string;
    }>;
}
