import { Body, Injectable, NotFoundException, Post } from '@nestjs/common';
import { CreateDto } from './dto/create-dto';

@Injectable()
export class AppService {

  private books: any=[];
  getHello(): string {
    return 'Good mornig my father';
  }

  getBook(): string {
    return this.books;
  }
  update(id: number, updateDto: CreateDto) {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex === -1) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }

    this.books[bookIndex] = { ...this.books[bookIndex], ...updateDto };
    return 'Update successful';
  }


  delete(id : number){
    const hamza =this.books.findIndex(book=> book.id ===id);
   
    this.books.splice(hamza, 1);
    return 'delete successful';
  }


  create(@Body() createDto : CreateDto  ){
    this.books.push(createDto)
    console.log (createDto);
    //return createDto;
    return {"msg":"book added"};
    
    
      }
}
