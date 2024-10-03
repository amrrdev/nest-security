import { CallHandler, ExecutionContext, NestInterceptor, Type } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { map, Observable } from 'rxjs';

export class SerializeInterceptor<T> implements NestInterceptor {
  constructor(private readonly userSerializeDto: Type<T>) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<T> {
    return next.handle().pipe(
      map((response: T) => {
        return plainToClass(this.userSerializeDto, response, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
