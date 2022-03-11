import { MessagesRepository } from './messages.repository';
export class MessagesService {
  messageRepo: MessagesRepository;

  constructor() {
    // service is creating its own deps
    // do not do this on real app
    this.messageRepo = new MessagesRepository(); // temp code
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
