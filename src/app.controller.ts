import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from './dto/create-dto';
import { Router } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get('/allBooks')
  getBooks(): string {
    return this.appService.getBook();
  }
  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }


  @Post()
  create(@Body() createDto : CreateDto  ){
 return this.appService.create(createDto);
  }

  @Put('updates/:id/')
  update(@Param('id') id: number,@Body()  updateDto : CreateDto){
  return this.appService.update(id,updateDto)
}
@Delete('dell/:id/')
delete(@Param('id') id : number){
  return this.appService.delete(id);
}
}
