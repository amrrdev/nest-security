import { Expose } from 'class-transformer';
import { IsEmail } from 'class-validator';

export class UserSerilaizeDto {
  @IsEmail()
  @Expose()
  readonly email: string;
}
