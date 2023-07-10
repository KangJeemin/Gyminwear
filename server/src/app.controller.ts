import { Controller, Get, Res } from '@nestjs/common';
import { getToPathname } from '@remix-run/router';
import { AppService } from './app.service';
import {Response} from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  gethtml(@Res()res:Response): void {
    res.sendFile('index.html',{root:'../client/public'})
  }

  @Get('/bundle.js')
  getbundle(@Res()res:Response):void {
    res.sendFile('bundle.js',{root:'../client/public'})
  }
}
