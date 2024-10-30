import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOrCreateUser(data: { email: string; name: string }) {
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (user) return user;

    return this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
      },
    });
  }
}
