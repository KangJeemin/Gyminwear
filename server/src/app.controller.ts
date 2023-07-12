import { Controller, Get ,Render} from '@nestjs/common';
import { AppService } from './app.service';
// import {Response} from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // gethtml(@Res()res:Response): void {
  //   res.sendFile('index.html',{root:'../client/public'})
  // }

  // @Get('/bundle.js')
  // getbundle(@Res()res:Response):void {
  //   res.sendFile('bundle.js',{root:'../client/public'})
  // }
  @Get()
  @Render('Index')
  public index() {
    return {
      title: "Nest is very good"
    }
  }
}
