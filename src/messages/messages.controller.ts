import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

// @Headers()  @Query() @Body() @Param 

@Controller('/messages')
export class MessagesController {
  
  @Get()
  listMessage() {
    console.log('get all messages')
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log('create message', body)
  }

  @Get('/:id')
  getMessage(@Param('id') id: string | number) {
    console.log('get message by id', id)
  }

}
