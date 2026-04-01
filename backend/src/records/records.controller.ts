import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { RecordsService } from './records.service';
import { CreateRecordDto } from './dto/create-record.dto';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('records')
export class RecordsController {
  constructor(private recordsService: RecordsService) {}

  @Post()
  @Roles('admin')
  create(@Body() body: CreateRecordDto) {
    return this.recordsService.create(body);
  }

  @Get()
  @Roles('admin', 'analyst', 'viewer')
  findAll(@Query() query: any) {
    return this.recordsService.findAll(query);
  }

  @Patch(':id')
  @Roles('admin', 'analyst')
  update(@Param('id') id: string, @Body() body: any) {
    return this.recordsService.update(id, body);
  }

  @Delete(':id')
  @Roles('admin')
  delete(@Param('id') id: string) {
    return this.recordsService.delete(id);
  }
}
