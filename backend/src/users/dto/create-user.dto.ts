import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ required: false, enum: ['viewer', 'analyst', 'admin'] })
  role?: 'viewer' | 'analyst' | 'admin';
}
