import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from 'src/messages.repository';
import { MessagesService } from 'src/messages.service';

@Module({
  controllers: [MessagesController],
  // dependencies로 사용 되는 class
  providers: [MessagesRepository, MessagesService],
})
export class MessagesModule {}
