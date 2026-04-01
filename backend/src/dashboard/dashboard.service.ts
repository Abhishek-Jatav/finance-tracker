import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getSummary(userId?: string) {
    // 1. TOTAL INCOME
    const income = await this.prisma.record.aggregate({
      _sum: { amount: true },
      where: { type: 'income', userId },
    });

    // 2. TOTAL EXPENSE
    const expense = await this.prisma.record.aggregate({
      _sum: { amount: true },
      where: { type: 'expense', userId },
    });

    // 3. CATEGORY-WISE EXPENSE
    const categoryWise = await this.prisma.record.groupBy({
      by: ['category'],
      where: { type: 'expense', userId },
      _sum: { amount: true },
    });

    // 4. RECENT TRANSACTIONS
    const recent = await this.prisma.record.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      where: { userId },
    });

    return {
      totalIncome: income._sum.amount || 0,
      totalExpense: expense._sum.amount || 0,
      balance: (income._sum.amount || 0) - (expense._sum.amount || 0),
      categoryWise,
      recent,
    };
  }
}
