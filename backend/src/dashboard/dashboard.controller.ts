import { Controller, Get, Query } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @Get('summary')
  @Roles('admin', 'analyst')
  getSummary(@Query('userId') userId?: string) {
    return this.dashboardService.getSummary(userId);
  }
}
