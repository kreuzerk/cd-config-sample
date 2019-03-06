import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('/configuration')
    public getConfiguration(): any {
        return {
            resourceServerA: process.env.resourceServerA,
            resourceServerB: process.env.resourceServerB,
            stage: process.env.stage
        };
    }
}
