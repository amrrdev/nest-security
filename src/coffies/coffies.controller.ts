import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoffiesService } from './coffies.service';
import { CreateCoffyDto } from './dto/create-coffy.dto';
import { UpdateCoffyDto } from './dto/update-coffy.dto';

@Controller('coffies')
export class CoffiesController {
  constructor(private readonly coffiesService: CoffiesService) {}

  @Post()
  create(@Body() createCoffyDto: CreateCoffyDto) {
    return this.coffiesService.create(createCoffyDto);
  }

  @Get()
  findAll() {
    return this.coffiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffyDto: UpdateCoffyDto) {
    return this.coffiesService.update(+id, updateCoffyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffiesService.remove(+id);
  }
}
