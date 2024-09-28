import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffyDto } from './create-coffy.dto';

export class UpdateCoffyDto extends PartialType(CreateCoffyDto) {}
