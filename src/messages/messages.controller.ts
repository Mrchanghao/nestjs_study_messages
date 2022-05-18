import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from 'src/messages.service';
// @Headers()  @Query() @Body() @Param

@Controller('/messages')
export class MessagesController {
  messageService: MessagesService;

  constructor(public MessagesService: MessagesService) {
    // do not do this real app;
    // this.messageService = new MessagesService();
  }

  @Get()
  listMessage() {
    return this.messageService.findAll();
    console.log('get all messages');
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log('create message', body);
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    console.log('get message by id', id);
    const message = await this.messageService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message;
  }
}
