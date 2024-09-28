import { Injectable } from '@nestjs/common';
import { CreateCoffyDto } from './dto/create-coffy.dto';
import { UpdateCoffyDto } from './dto/update-coffy.dto';

@Injectable()
export class CoffiesService {
  create(createCoffyDto: CreateCoffyDto) {
    return 'This action adds a new coffy';
  }

  findAll() {
    return `This action returns all coffies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coffy`;
  }

  update(id: number, updateCoffyDto: UpdateCoffyDto) {
    return `This action updates a #${id} coffy`;
  }

  remove(id: number) {
    return `This action removes a #${id} coffy`;
  }
}
