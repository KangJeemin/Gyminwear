import { AppService } from './app.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    gethtml(res: Response): void;
    getbundle(res: Response): void;
}
