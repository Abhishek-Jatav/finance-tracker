import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Ping endpoint (Backend + DB check)
  @Get('ping')
  async ping(@Res() res: Response) {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return res.status(200).json({
        status: 'ok',
        message: 'pong 🏓',
        time: new Date().toISOString(),
      });
    } catch (error) {
      return res.status(503).json({
        status: 'error',
        message: 'not pong ❌',
        time: new Date().toISOString(),
      });
    }
  }

  @Get('health')
  health() {
    return {
      status: 'healthy',
      uptime: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
      service: 'task-manager',
    };
  }
}
