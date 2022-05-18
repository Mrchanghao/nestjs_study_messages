import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  // messageRepo: MessagesRepository;

  // constructor() {
  //   // service is creating its own deps
  //   // do not do this on real app
  //   this.messageRepo = new MessagesRepository(); // temp code
  // }
  constructor(public messageRepo: MessagesRepository) {
    // this.messageRepo = messageRepo;
  }

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  create(content: string) {
    return this.messageRepo.create(content);
  }
}
