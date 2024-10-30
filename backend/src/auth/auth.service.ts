import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  private readonly usersService: UsersService;

  constructor(usersService: UsersService) {
    this.usersService = usersService;
  }

  async signIn(data: { id: string; name: string; email: string }) {
    if (!data.id && !data.email) throw new UnauthorizedException();
    const user = await this.usersService.findOrCreateUser(data);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
