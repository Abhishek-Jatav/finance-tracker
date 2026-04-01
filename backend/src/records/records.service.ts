import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecordDto } from './dto/create-record.dto';

@Injectable()
export class RecordsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateRecordDto) {
    return this.prisma.record.create({
      data: {
        ...data,
        date: new Date(data.date),
      },
    });
  }

  findAll(query: any) {
    const { type, category, userId } = query;

    return this.prisma.record.findMany({
      where: {
        type: type || undefined,
        category: category || undefined,
        userId: userId || undefined,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  update(id: string, data: any) {
    return this.prisma.record.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.record.delete({
      where: { id },
    });
  }
}
