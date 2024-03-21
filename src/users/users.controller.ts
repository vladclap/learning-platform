import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRole } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async registerUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('role') role: UserRole,
    @Body('username') username: string,
  ) {
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      return { message: 'User exists' };
    }
    const createdUser = await this.usersService.createUser(
      name,
      email,
      password,
      role,
      username,
    );
    return { message: 'Successfully registered', user: createdUser };
  }
}
